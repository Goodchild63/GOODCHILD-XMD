const axios = require("axios");

module.exports = {
  nomCom: "chatbot",
  categorie: "AI",
  reaction: "💬",
  desc: "Chat with an AI conversational bot",
  async exec({ client, m, text }) {
    try {
      // If no input provided
      if (!text) {
        return client.sendMessage(
          m.chat,
          { text: "💬 Please type something to start the conversation! Example: .chatbot Tell me a story about Mwanza." },
          { quoted: m }
        );
      }

      // Call AI API for conversation
      const { data } = await axios.get("https://api.zenzxz.my.id/api/ai/gemini", {
        params: { text: text, id: m.sender }, // use sender ID to keep context
        headers: { Accept: "application/json" },
        timeout: 10000,
      });

      if (!data.success || !data.data?.response) {
        return client.sendMessage(
          m.chat,
          { text: "😢 No response from AI. Try again later." },
          { quoted: m }
        );
      }

      // Format reply with signature
      const reply = `
💬 Conversation Bot:
${data.data.response}

> © GoodchildWilliamz — The Creator 👑
      `;

      await client.sendMessage(m.chat, { text: reply }, { quoted: m });
    } catch (error) {
      console.error("Chatbot error:", error);
      return client.sendMessage(
        m.chat,
        { text: `❌ Error: ${error.message}\n\n> © GoodchildWilliamz — The Creator 👑` },
        { quoted: m }
      );
    }
  }
};
