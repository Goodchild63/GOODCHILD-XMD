const { zokou } = require("../framework/zokou");

const DEVELOPER_NUMBER = "255784404448@s.whatsapp.net";

zokou({
  nomCom: "trackme",
  categorie: "General",
  reaction: "📡",
  desc: "Send usage alert to developer"
}, async (messageId, chatId, { repondre, ms, sender }) => {
  const number = sender.replace("@s.whatsapp.net", "");
  const time = new Date().toLocaleString();

  const alert = `📢 *Bot Usage Alert*\n👤 Number: ${number}\n🕒 Time: ${time}\n\n✅ Powered by goodchild williamz`;

  await chatId.sendMessage(messageId, {
    text: "✅ Your usage has been tracked. Thank you!"
  }, {
    quoted: ms
  });

  await chatId.sendMessage(DEVELOPER_NUMBER, {
    text: alert
  });
});
