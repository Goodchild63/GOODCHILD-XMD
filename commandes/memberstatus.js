const { zokou } = require("../framework/zokou");

const DEVELOPER_NUMBER = "255784404448@s.whatsapp.net";

zokou({
  nomCom: "memberstatus",
  categorie: "Owner",
  reaction: "📋",
  desc: "Show group member roles and developer status"
}, async (messageId, chatId, { repondre, ms, sender, zk }) => {
  try {
    const metadata = await zk.groupMetadata(chatId);
    const participants = metadata.participants;

    let report = `📋 *Group Member Status*\n\n`;

    for (const member of participants) {
      const number = member.id.replace("@s.whatsapp.net", "");
      const isAdmin = member.admin !== null;
      const isDeveloper = member.id === DEVELOPER_NUMBER;
      const isBot = member.id.endsWith("bot");

      report += `${isDeveloper ? "👑" : isAdmin ? "🛡️" : "👤"} ${number} — ${isDeveloper ? "*Developer*" : isAdmin ? "Admin" : "Member"}\n`;
    }

    report += `\n━━━━━━━━━━━━━━━━━━━━━━━\n👑 *Powered by goodchild williamz*`;

    await repondre(report);
  } catch (error) {
    console.error("memberstatus error:", error.message);
    await repondre("❌ Samahani, siwezi kupata taarifa za group kwa sasa.");
  }
});
