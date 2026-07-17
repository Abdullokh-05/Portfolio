// ============================================================
// server.js — Railway Production Server
// Abdullokh Tashpulatov Portfolio
// ============================================================
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Generate config.js from ENV vars at startup ─────────────
const configContent = `// Auto-generated at server startup — do not edit manually
const TELEGRAM_CONFIG = {
  BOT_TOKEN: "${process.env.TELEGRAM_BOT_TOKEN || ''}",
  CHAT_IDS: [${process.env.TELEGRAM_CHAT_IDS || '"631504190"'}]
};

const OPENAI_CONFIG = {
  API_KEY: "${process.env.OPENAI_API_KEY || ''}"
};

const SUPABASE_CONFIG = {
  URL: "https://ypjxvtdtpwjcdnkofhsh.supabase.co",
  ANON_KEY: "${process.env.SUPABASE_ANON_KEY || ''}"
};
`;

fs.writeFileSync(path.join(__dirname, 'js', 'config.js'), configContent);
console.log('✅ config.js generated from environment variables');

// ── Middleware ───────────────────────────────────────────────
app.use(express.json());

// Serve all static files from the root folder
app.use(express.static(path.join(__dirname), {
  index: 'index.html'
}));

// ── Telegram Webhook ─────────────────────────────────────────
app.post('/api/webhook', async (req, res) => {
  const { message } = req.body || {};
  if (!message || !message.text) return res.json({ ok: true });

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return res.status(500).json({ error: 'Bot token not configured' });

  const chatId = message.chat.id;
  const text = message.text.trim();

  if (text.startsWith('/start')) {
    const appUrl = process.env.APP_URL || `https://${req.headers.host}`;

    const payload = {
      chat_id: chatId,
      text: `Assalomu alaykum! Abdullokh Tashpulatovning portfolio ilovasini ochish uchun quyidagi tugmani bosing.\n\nПриветствуем! Нажмите кнопку ниже, чтобы открыть приложение-портфолио.\n\nWelcome! Tap the button below to open the portfolio app.`,
      reply_markup: {
        inline_keyboard: [[{
          text: '💻 Open Portfolio',
          web_app: { url: appUrl }
        }]]
      }
    };

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.error('Webhook fetch error:', err);
    }
  }

  return res.json({ ok: true });
});

// ── Fallback — serve index.html for any unknown route ────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running on port ${PORT}`);
});
