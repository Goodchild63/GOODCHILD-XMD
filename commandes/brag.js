const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "brag",
  categorie: "Owner",
  reaction: "🔥",
  desc: "Bot flexes about its creator with contact info"
}, async (messageId, chatId, { repondre, ms }) => {
  const bragMessage = `
╔══════════════════════╗
║ 💥 *ABOUT BOT DEVELOPER*  
╚══════════════════════╝

You’re chatting with a bot built by one of the sharpest minds in the game.

👨‍💻 Developer: *goodchild williamz*  
📞 WhatsApp: *+255 784 404 448*  
🧠 Skills: Node.js, WhatsApp bots, voice branding, cloning protection  
🎯 Precision: Every command is modular, protected, and professionally branded  
🎙️ Voice? Integrated with ElevenLabs  
🛡️ Security? Locked tighter than Fort Knox  
📈 Reputation? Rising like a rocket

This isn’t just a bot.  
It’s a statement.  
It’s a legacy.  
It’s *goodchild williamz* — and you’re lucky to witness it.

━━━━━━━━━━━━━━━━━━━━━━━
✅ Powered by goodchild williamz
`;

  await chatId.sendMessage(messageId, {
    text: bragMessage
  }, {
    quoted: ms
  });
});
