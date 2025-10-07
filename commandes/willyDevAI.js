const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const { Configuration, OpenAIApi } = require('openai');

// 🔐 Developer-only number
const OWNER_NUMBER = '2557XXXXXXX'; // Badilisha na namba yako ya WhatsApp

// 🔧 AI Setup
const openai = new OpenAIApi(new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY'
}));

// 🧠 AI Response Function
async function getAIResponse(prompt) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }]
  });
  return completion.data.choices[0].message.content;
}

// 🚀 WhatsApp Bot Init
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const sock = makeWASocket({ auth: state });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;

    const sender = msg.key.remoteJid;
    const text = msg.message.conversation || msg.message.extendedTextMessage?.text;

    // 🔐 Developer-only access
    if (sender.includes(OWNER_NUMBER)) {
      if (text.startsWith('!ai')) {
        const prompt = text.slice(4).trim();
        const reply = await getAIResponse(prompt);
        await sock.sendMessage(sender, { text: `🤖 WillyDevAI:\n\n${reply}` });
      }
    } else {
      await sock.sendMessage(sender, { text: '⚠️ Samahani, bot hii ni ya developer pekee.' });
    }
  });

  sock.ev.on('creds.update', saveCreds);
}

startBot();
