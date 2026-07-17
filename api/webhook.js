module.exports = async (req, res) => {
  // Gracefully handle Vercel warming requests or non-POST requests
  if (req.method !== 'POST') {
    return res.status(200).json({ status: 'active' });
  }

  const { message } = req.body || {};
  if (!message || !message.text) {
    return res.status(200).json({ status: 'ignored' });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) {
    console.error('TELEGRAM_BOT_TOKEN env var is missing');
    return res.status(500).json({ error: 'Config missing' });
  }

  const chatId = message.chat.id;
  const text = message.text.trim();

  // If user sends /start, reply with Web App button
  if (text.startsWith('/start')) {
    // Dynamically retrieve Vercel URL
    const vercelUrl = `https://${req.headers.host}`;

    const payload = {
      chat_id: chatId,
      text: `Assalomu alaykum! Abdullokh Tashpulatovning portfolio ilovasini ochish uchun quyidagi tugmani bosing. \n\nПриветствуем! Нажмите кнопку ниже, чтобы открыть приложение-портфолио Абдуллоха Ташпулатова. \n\nWelcome! Tap the button below to open the portfolio app.`,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "💻 Open App / Ilovani ochish",
              web_app: {
                url: vercelUrl
              }
            }
          ]
        ]
      }
    };

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!data.ok) {
        console.error('Telegram send message error:', data);
      }
    } catch (err) {
      console.error('Webhook execution exception:', err);
    }
  }

  return res.status(200).json({ ok: true });
};
