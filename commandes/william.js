const { zokou } = require("../framework/zokou");
const axios = require("axios");

// Weka API key yako hapa moja kwa moja
const OPENAI_API_KEY = "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";

zokou({
  nomCom: "william",
  categorie: "AI",
  reaction: "🧠",
  desc: "Ask William AI anything"
}, async (messageId, chatId, { repondre, arg }) => {
  const prompt = arg.join(" ").trim();
  if (!prompt) return repondre("❗ Tafadhali andika swali au maombi yako kwa William AI.");

  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo", // tumia model hii kwa compatibility
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        }
      }
    );

    const reply = res.data.choices[0].message.content;
    await repondre(`🧠 *William AI says:*\n\n${reply}`);
  } catch (error) {
    console.error("OpenAI error:", error.message);
    await repondre("❌ Samahani, kuna tatizo kwenye kujibu. Hakikisha API key ni sahihi na haijazidi limit.");
  }
});
