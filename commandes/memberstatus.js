const { zokou } = require("../framework/zokou");

const DEVELOPER_NUMBER = "255784404448"; // bila @s.whatsapp.net

zokou({
  nomCom: "memberstatus",
  categorie: "Owner",
  reaction: "📋",
  desc: "Show group member roles and developer status"
}, async (messageId, chatId, { repondre, ms, sender, zk }) => {
  try {
    if (!chatId.endsWith("@g.us")) {
      return repondre("❌ Command hii inafanya kazi tu ndani ya group.");
    }

    const metadata = await zk.groupMetadata(chatId);
    const participants = metadata.participants;

    let report = `📋 *Group Member Status*\n\n`;

    for (const member of participants) {
      const rawNumber = member.id.replace("@s.whatsapp.net", "");
      const isAdmin = member.admin !== null;
      const isDeveloper = rawNumber === DEVELOPER_NUMBER;

      const role = isDeveloper
        ? "*Developer*"
        : isAdmin
        ? "Admin"
        : "Member";

      const icon = isDeveloper
        ? "👑"
        : isAdmin
        ? "🛡️"
        : "👤";

      report += `${icon} ${rawNumber} — ${role}\n`;
    }

    report += `\n━━━━━━━━━━━━━━━━━━━━━━━\n✅ *Powered by goodchild williamz*`;

    await repondre(report);
  } catch (error) {
    console.error("memberstatus error:", error.message);
    await repondre("❌ Samahani, siwezi kupata taarifa za group kwa sasa. Hakikisha bot iko ndani ya group na ina ruhusa.");
  }
});
