const axios = require("axios");

module.exports = {
  nomCom: "storygen",
  categorie: "Fun",
  reaction: "📖",
  desc: "Generate a short creative story",
  async exec({ client, m, text }) {
    try {
      // If no prompt provided
      if (!text) {
        return client.sendMessage(
          m.chat,
          { text: "📖 Please provide a theme for the story! Example: .storygen A boy in Mwanza finds a magic phone." },
          { quoted: m }
        );
      }

      // Call AI API for story generation
      const { data } = await axios.get("https://api.zenzxz.my.id/api/ai/gemini", {
        params: { text: `Write a short creative story about: ${text}`, id: "string" },
        headers: { Accept: "application/json" },
        timeout: 10000,
      });

      if (!data.success || !data.data?.response) {
        return client.sendMessage(
          m.chat,
          { text: "😢 Failed to generate story. Try again later." },
          { quoted: m }
        );
      }

      // Format story with signature
      const story = `
╭━━━📖 Short Story ━━━╮
${data.data.response}
╰━━━━━━━━━━━━━━━━━━━━━╯

> © GoodchildWilliamz — The Creator 👑
      `;

      await client.sendMessage(m.chat, { text: story }, { quoted: m });
    } catch (error) {
      console.error("Storygen error:", error);
      return client.sendMessage(
        m.chat,
        { text: `❌ Error: ${error.message}\n\n> © GoodchildWilliamz — The Creator 👑` },
        { quoted: m }
      );
    }
  }
};
