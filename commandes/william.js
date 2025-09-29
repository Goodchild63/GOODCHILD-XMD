const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "william",
  categorie: "AI",
  reaction: "🤖",
  desc: "Ask anything to William AI (English & Kiswahili)"
}, async (messageId, chatId, { repondre, ms, arg }) => {
  const question = arg.join(" ");
  if (!question) {
    return repondre("❓ Tafadhali uliza swali. Mfano: `.william William wewe ni nani`");
  }

  // Sample response logic (can be expanded with AI integration)
  let response = "";

  if (question.toLowerCase().includes("wewe ni nani")) {
    response = `🤖 *William AI* — I am an intelligent assistant created by *William David*, designed to answer questions in both English and Kiswahili. I exist to help, explain, and interact with you in a smart and friendly way.`;
  } else {
    response = `🤖 *William AI Response*\n\nI'm still learning, but here's what I can say:\n\n❓ *Swali:* ${question}\n\n✅ *Jibu (Kiswahili):* Samahani, bado sijajifunza swali hili vizuri.\n✅ *Answer (English):* Sorry, I'm still learning how to answer that question.`;
  }

  await repondre(response);
});
