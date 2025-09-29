const { zokou } = require("../framework/zokou");

// Developer number override
const DEVELOPER_NUMBER = "255784404448";

function isDeveloper(sender) {
  return sender.includes(DEVELOPER_NUMBER);
}

zokou({
  nomCom: "devpanel",
  categorie: "Owner",
  reaction: "🧠",
  desc: "Developer-only control panel"
}, async (messageId, chatId, { repondre, ms, sender }) => {
  if (!isDeveloper(sender)) {
    return repondre("⛔ This command is restricted to the official developer.\n\n✅ Powered by goodchild williamz");
  }

  const msg = `
╔══════════════════════╗
║ 🧠 *DEVELOPER PANEL*  
╚══════════════════════╝

Welcome back, *goodchild williamz*.

🔧 You have full control over this bot  
🛡️ Your number overrides all deployments  
📊 You can access logs, restart, lock features, or inject code  
📞 Contact: wa.me/${DEVELOPER_NUMBER}

━━━━━━━━━━━━━━━━━━━━━━━
😎 Powered by goodchild williamz
`;

  await chatId.sendMessage(messageId, {
    text: msg
  }, {
    quoted: ms
  });
});
