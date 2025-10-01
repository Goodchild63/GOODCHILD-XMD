const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "grouplink",
  categorie: "Info",
  reaction: "🔗",
  desc: "Get the official group link"
}, async (messageId, chatId, { repondre }) => {
  const link = "https://chat.whatsapp.com/GPvsunEg86x3GhsGdLcdwi?mode=ems_copy_t";

  await repondre(
    `🔗 *GOODCHILD OFFICIAL GROUP LINK:*\n\n${link}\n\n✅ Done by goodchild williamz`
  );
});
