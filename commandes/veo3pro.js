zokou({
  nomCom: "veo3pro",
  categorie: "Fun",
  reaction: "🎬",
  desc: "Simulate Wema Sepetu voice line"
}, async (messageId, chatId, { repondre, arg, ms }) => {
  if (!arg || arg.length === 0) {
    return repondre("🎤 Please provide the message you want Wema Sepetu to say.\n\n✅ Powered by goodchild williamz");
  }

  const text = arg.join(" ");
  const simulatedLine = `🎧 *Wema Sepetu says:*\n"${text}"\n\n✅ Powered by goodchild williamz`;

  await chatId.sendMessage(messageId, {
    text: simulatedLine
  }, {
    quoted: ms
  });
});
