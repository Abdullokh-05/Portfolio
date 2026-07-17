const fs = require('fs');

const config = `// Generated at build time
const TELEGRAM_CONFIG = {
  BOT_TOKEN: "${process.env.TELEGRAM_BOT_TOKEN || ''}",
  CHAT_IDS: [${process.env.TELEGRAM_CHAT_IDS || ''}]
};

const OPENAI_CONFIG = {
  API_KEY: "${process.env.OPENAI_API_KEY || ''}"
};

const SUPABASE_CONFIG = {
  URL: "https://ypjxvtdtpwjcdnkofhsh.supabase.co",
  ANON_KEY: "${process.env.SUPABASE_ANON_KEY || ''}"
};
`;

fs.writeFileSync('js/config.js', config);
console.log('js/config.js successfully generated.');
