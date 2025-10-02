const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({
  nomCom: "video",
  categorie: "Downloader",
  reaction: "🎬",
  desc: "Download a YouTube video by name"
}, async (messageId, chatId, { repondre, arg, ms, zk }) => {
  const query = arg.join(" ");
  if (!query) return repondre("❌ Please provide the name of the song or video.\n\nExample: *.video Harmonize Single Again*");

  try {
    const res = await axios.get(`https://vihangayt.me/download?query=${encodeURIComponent(query)}`);
    const videoUrl = res.data.data.video;
    const title = res.data.data.title;

    await zk.sendMessage(chatId, {
      video: { url: videoUrl },
      caption: `🎬 *${title}*\n\n✅ Delivered by goodchild williamz`
    }, { quoted: ms });
  } catch (e) {
    console.error("Video Error:", e.message);
    await repondre("❌ Failed to retrieve the video. Try a different title or check your API.");
  }
});
