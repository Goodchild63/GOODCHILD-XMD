const { zokou } = require("../framework/zokou");

const DEVELOPER_NAME = "goodchild williamz";
const DEVELOPER_NUMBER = "255792375563";

zokou({
  nomCom: "aboutbot",
  categorie: "Owner",
  reaction: "📦",
  desc: "Show bot identity, features, and developer info"
}, async (messageId, chatId, { repondre }) => {
  const msg = `
📦 *Bot Identity & Features*

🤖 *Name:* Goodchild williamz  
🧠 *Engine:* GPT-powered, multilingual (Kiswahili 🇹🇿 + English 🇬🇧)  
🎨 *Style:* Smart, respectful, branded  
📡 *Commands:* .william, .memberstatus, .devpanel, .mybrand, .brag  
🔐 *Control:* Developer-only override logic  
📊 *Monitoring:* Tracks deployments and user activity  
📞 *Developer:* ${DEVELOPER_NAME}  
📱 *Contact:* wa.me/${DEVELOPER_NUMBER}  
🛡️ *Protection:* Only obeys commands from developer number  
🧬 *Legacy:* Every response carries the mark of ${DEVELOPER_NAME}

━━━━━━━━━━━━━━━━━━━━━━━  
👑 *Powered by ${DEVELOPER_NAME}*
`;

  await repondre(msg);
});
