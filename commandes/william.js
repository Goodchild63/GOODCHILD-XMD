const { zokou } = require('../framework/zokou');
const axios = require('axios');

const DEVELOPER_NAME = "Goodchild williamz";

zokou({
  nomCom: "william",
  reaction: "🤖",
  categorie: "AI",
  desc: "Ask anything to William AI (Kiswahili & English)"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;
  const question = arg.join(" ").trim();

  if (!question) {
    return repondre("❓ Tafadhali uliza swali. Mfano: `.william William wewe ni nani`");
  }

  const headers = {
    'Content-Type': 'application/json',
    'Referer': 'https://chatgpt4online.org/',
    'Sec-Ch-Ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'X-Wp-Nonce': '152990aad3'
  };

  const params = {
    botId: "default",
    customId: null,
    session: "N/A",
    chatId: "r20gbr387ua",
    contextId: 58,
    messages: [
      {
        id: "0aqernpzbas7",
        role: "assistant",
        content: "Hi! How can I help you?",
        who: "AI: ",
        timestamp: Date.now()
      }
    ],
    newMessage: question,
    newFileId: null,
    stream: false
  };

  try {
    const response = await axios.post("https://chatgpt4online.org/wp-json/mwai-ui/v1/chats/submit", params, { headers });
    const reply = response.data.reply || "Samahani, sijapata jibu sahihi kwa sasa.";

    await repondre(`🤖 *William AI Response*\n\n${reply}\n\n✅ Powered by ${DEVELOPER_NAME}`);
  } catch (error) {
    console.error("William AI error:", error.message);
    await repondre("❌ Hitilafu imetokea kwenye William AI. Tafadhali jaribu tena baadaye.");
  }
});
