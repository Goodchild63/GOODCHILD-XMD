const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "intro",
  categorie: "Owner",
  reaction: "🚀",
  desc: "Bot introduction with branding"
}, async (messageId, chatId, { repondre, ms }) => {
  const introMessage = `
╔══════════════════════╗
║ 🤖 *BOT INTRODUCTION*  
╚══════════════════════╝

Hello there! I'm your intelligent assistant — built to serve, entertain, and protect.

🔧 I respond to smart commands  
🎵 I fetch lyrics, facts, quotes, and more  
🛡️ Owner-only settings keep me secure  
🎙️ I simulate celebrity voice lines  
📊 I offer a full dashboard for control

And most importantly...

✨ *Powered by goodchild williamz*  
The one and only — developer, protector, and visionary behind this bot.

━━━━━━━━━━━━━━━━━━━━━━━
📅 Today’s vibe: ${new Date().toLocaleDateString()}
Type *.menu* to explore my full command list.
`;

  await chatId.sendMessage(messageId, {
    text: introMessage
  }, {
    quoted: ms
  });
});
