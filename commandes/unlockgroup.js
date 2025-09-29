const { zokou } = require("../framework/zokou");

// Developer override number
const DEVELOPER_NUMBER = "255784404448";

function isDeveloper(sender) {
  return sender.includes(DEVELOPER_NUMBER);
}

zokou({
  nomCom: "unlockgroup",
  categorie: "Owner",
  reaction: "🔓",
  desc: "Unlock group if commanded by admin or developer"
}, async (messageId, chatId, { repondre, ms, sender, groupMetadata, botAdmin, participants }) => {
  if (!groupMetadata) {
    return repondre("⚠️ This command can only be used in a group.");
  }

  const isGroupAdmin = participants.some(p => p.id.includes(sender) && p.admin);

  if (!isDeveloper(sender) && !isGroupAdmin) {
    return repondre("⛔ You must be a group admin or the official developer to use this command.");
  }

  if (!botAdmin) {
    return repondre("⚠️ Bot is not an admin in this group. Cannot unlock group.");
  }

  await chatId.groupSettingUpdate("not_announcement"); // Unlock group

  const msg = `
🔓 *Group Unlocked Successfully*

✅ All members can now send messages  
🔧 Action triggered by ${isDeveloper(sender) ? "developer override" : "group admin"}  
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
