'use strict';

const { zokou } = require("../framework/zokou");
const axios = require("axios");

zokou({
  nomCom: "lyrics",
  reaction: '🎵',
  categorie: "Search"
}, async (messageId, chatId, { repondre, arg, ms }) => {
  try {
    if (!arg || arg.length === 0) {
      return repondre("🎶 Tafadhali andika jina la wimbo.\n\nMfano:\nlyrics Calm Down");
    }

    const songName = arg.join(" ");
    const encodedQuery = encodeURIComponent(songName);

    const response = await axios.get(`https://samirxpikachuio.onrender.com/lyrics?query=${encodedQuery}`);
    
    if (response.data && response.data.lyrics) {
      const lyrics = response.data.lyrics;

      const finalMessage = `🎤 *Lyrics for:* ${songName}\n\n${lyrics}\n\n━━━━━━━━━━━━━━\n🔋 *Powered by GoodChild Williamz*`;
      
      await chatId.sendMessage(messageId, {
        text: finalMessage
      }, {
        quoted: ms
      });
    } else {
      repondre(`😔 Samahani, sijaweza kupata lyrics za "${songName}". Jaribu jina tofauti.`);
    }
  } catch (error) {
    console.error(error);
    repondre("🚫 Hitilafu imetokea wakati wa kutafuta lyrics. Tafadhali jaribu tena baadaye.");
  }
});
