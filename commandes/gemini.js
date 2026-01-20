const axios = require("axios");

module.exports = {
  nomCom: "gemini",
  categorie: "AI",
  reaction: "🤖",
  desc: "Chat na Gemini AI kwa majibu",
  async exec(context) {
    const { client, m, text } = context;

    const formatStylishReply = (message) => {
      return `╭┈┈┈┈━━━━━━┈┈┈┈◈◈
┋❒ ${message}
╰┈┈┈┈━━━━━━┈┈┈┈◈◈`;
    };

    // Check if text is provided
    if (!text) {
      return client.sendMessage(
        m.chat,
        { text: formatStylishReply("Yo, fam, give me something to chat about! 🗣️ Example: .gemini Who is goodchildwiliamz?") },
        { quoted: m }
      );
    }

    // Limit input length
    if (text.length > 500) {
      return client.sendMessage(
        m.chat,
        { text: formatStylishReply("Chill, homie! Keep it under 500 chars. 📝") },
        { quoted: m }
      );
    }

    try {
      // Hit the API
      const { data } = await axios.get("https://api.zenzxz.my.id/api/ai/gemini", {
        params: { text: text, id: "string" },
        headers: { Accept: "application/json" },
        timeout: 10000,
      });

      // Check if response is valid
      if (!data.success || !data.data?.response) {
        return client.sendMessage(
          m.chat,
          { text: formatStylishReply("API’s acting shady, no response! 😢 Try again.") },
          { quoted: m }
        );
      }

      // Send the response with creator attribution
      await client.sendMessage(
        m.chat,
        { text: formatStylishReply(`${data.data.response}\n\n> © powered by Goodchild Williamz 👑`) },
        { quoted: m }
      );
    } catch (error) {
      console.error("Gemini command error:", error);
      return client.sendMessage(
        m.chat,
        { text: formatStylishReply(`Yo, something broke: ${error.message}. Try another query! 😎`) },
        { quoted: m }
      );
    }
  }
};
