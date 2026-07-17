// ============================================================
// ai-chat.js — Floating AI Assistant Logic
// Abdullokh Tashpulatov Portfolio
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initAiChat();
});

function initAiChat() {
  const toggleBtn = document.getElementById('aiWidgetToggle');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiChatWindowClose');
  const socialLinkBtn = document.getElementById('social-ai-chat');
  const chatForm = document.getElementById('aiChatForm');
  const chatInput = document.getElementById('aiChatInput');
  const messagesContainer = document.getElementById('aiChatMessages');
  const welcomeMsg = document.getElementById('aiWelcomeMsg');

  if (!toggleBtn || !chatWindow) return;

  // Initial welcome message language update
  updateWelcomeMessage();

  // Listen to lang button clicks to update welcome text dynamically
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setTimeout(updateWelcomeMessage, 50);
    });
  });

  function updateWelcomeMessage() {
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'uz';
    const t = typeof i18nData !== 'undefined' ? i18nData[lang] : null;
    if (t && welcomeMsg) {
      welcomeMsg.textContent = t.contact.aiWelcome;
    }
    if (t && chatInput) {
      chatInput.placeholder = t.contact.aiInputPlaceholder;
    }
  }

  // Toggle Chat Window
  const openChat = () => {
    chatWindow.classList.add('active');
    chatWindow.setAttribute('aria-hidden', 'false');
    chatInput.focus();
    // Mark toggle active
    toggleBtn.classList.add('active');
  };

  const closeChat = () => {
    chatWindow.classList.remove('active');
    chatWindow.setAttribute('aria-hidden', 'true');
    toggleBtn.classList.remove('active');
  };

  toggleBtn.addEventListener('click', () => {
    if (chatWindow.classList.contains('active')) {
      closeChat();
    } else {
      openChat();
    }
  });

  closeBtn?.addEventListener('click', closeChat);
  
  socialLinkBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openChat();
    // Scroll to chatbot viewport if mobile or needed
    chatWindow.scrollIntoView({ behavior: 'smooth', block: 'end' });
  });

  // Handle outside click to close chat on desktop (optional)
  document.addEventListener('click', (e) => {
    if (!chatWindow.contains(e.target) && !toggleBtn.contains(e.target) && (!socialLinkBtn || !socialLinkBtn.contains(e.target))) {
      closeChat();
    }
  });

  // Message History Store
  let messageHistory = [
    {
      role: "system",
      content: `You are the AI assistant of Abdullokh Tashpulatov, a highly talented graphic designer, videographer, and video editor with 2+ years of professional experience based in Tashkent, Uzbekistan.
Your goal is to answer client queries about Abdullokh's services, showcase his value proposition, and help secure new projects.

Key Details about Abdullokh Tashpulatov:
- Role: Graphic Designer, Videographer, Video Editor.
- Focus: Graphic Design & Branding, SMM & Targeting, Video & Motion Design, AI Art, Digital UI/UX.
- Core Value: "I don't just draw pictures; I create comprehensive visual and digital solutions that serve business goals." (Biznes uchun kompleks vizual va digital yechimlar).
- Portfolio/Case Studies:
  1. FiRSTiFY Brandbook (Branding): Complete corporate identity, logo, and guidelines. Resulted in 40% increase in social media recognition.
  2. Instagram Visual Identity (SMM): Cohesive layout, 30+ templates. Doubled follower count in 3 months.
  3. Meta Ads Creative Campaign (Targeting): A/B tested creatives, resulting in 3.2% CTR and 4.1 ROAS.
  4. AI Editorial Portrait Series (AI Art): Fashion lookbook using Midjourney, saving 70% of studio photoshoot costs.
  5. Telegram Bot UI Design (UI/UX): Figma user flows and UI for an e-commerce bot. Resulted in 35% order increase.
  6. Landing Page Design (UI/UX): High-conversion landing pages. Lead generation increased by 52% in A/B tests.
- Skills & Tools: Photoshop, Illustrator (Expert); After Effects, Premiere Pro, Figma, Midjourney, Stable Diffusion, Meta Ads Manager (Advanced); Webflow, HTML/CSS, RunwayML (Intermediate).
- Pricing & Budget Policy: Projects are billed based on complexity, number of languages, and requested custom animations. Standard roadmap is split into 3 parts (30% advance, 40% dev/design phase, 30% after launch).
- Contact: Telegram (@tashpulatov_design), Instagram (@tashpulatov.design), Behance (tashpulatov).
- Response Rules:
  - Respond in the language the user is speaking (Uzbek, Russian, or English).
  - Be professional, creative, warm, and highly persuasive.
  - Suggest contacting Abdullokh via Telegram (@tashpulatov_design) as a Call to Action (CTA) when appropriate.`
    }
  ];

  // Append message to UI
  function appendMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `ai-chat-msg ${isUser ? 'ai-chat-msg--user' : 'ai-chat-msg--bot'}`;
    
    const msgText = document.createElement('p');
    msgText.className = 'ai-chat-msg__text';
    msgText.textContent = text;
    
    msgDiv.appendChild(msgText);
    messagesContainer.appendChild(msgDiv);
    
    // Auto Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Append Typing indicator
  function createTypingIndicator() {
    const indicatorDiv = document.createElement('div');
    indicatorDiv.className = 'ai-chat-msg ai-chat-msg--bot ai-chat-typing';
    indicatorDiv.id = 'aiTypingIndicator';
    
    indicatorDiv.innerHTML = `
      <div class="ai-chat-typing__dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    messagesContainer.appendChild(indicatorDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function removeTypingIndicator() {
    const indicator = document.getElementById('aiTypingIndicator');
    if (indicator) indicator.remove();
  }

  // Handle message send
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    // Show message in UI
    appendMessage(query, true);
    chatInput.value = '';

    // Add to history
    messageHistory.push({ role: "user", content: query });
    if (messageHistory.length > 15) {
      // Keep system prompt + last 10 messages
      messageHistory = [messageHistory[0], ...messageHistory.slice(-10)];
    }

    // Show Typing
    createTypingIndicator();

    // Check configuration
    const apiKey = typeof OPENAI_CONFIG !== 'undefined' ? OPENAI_CONFIG.API_KEY : null;
    if (!apiKey || apiKey.startsWith('sk-proj-') === false) {
      removeTypingIndicator();
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'uz';
      const errMsg = lang === 'uz' ? "API kalit sozlanmagan." : lang === 'ru' ? "API ключ не настроен." : "API key not configured.";
      appendMessage(errMsg);
      return;
    }

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: messageHistory,
          temperature: 0.7
        })
      });

      const data = await response.json();
      removeTypingIndicator();

      if (data.choices && data.choices[0]) {
        const reply = data.choices[0].message.content.trim();
        appendMessage(reply);
        messageHistory.push({ role: "assistant", content: reply });
      } else {
        throw new Error(data.error?.message || 'Unknown API Error');
      }
    } catch (err) {
      console.error(err);
      removeTypingIndicator();
      const lang = typeof currentLang !== 'undefined' ? currentLang : 'uz';
      const errMsg = lang === 'uz' ? "Aloqada xatolik yuz berdi. Iltimos, qayta urinib ko'ring." : lang === 'ru' ? "Произошла ошибка сети. Пожалуйста, попробуйте еще раз." : "Network error. Please try again.";
      appendMessage(errMsg);
    }
  });
}
