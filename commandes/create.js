const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  nomCom: "create",
  reaction: '🎓',
  categorie: "𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳-𝙿𝙸𝙲𝚃𝚄𝚁𝙴𝚂"
}, async (message, sendMessage, { repondre, arg, ms }) => {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
    const data = await response.json();
    const imageUrl = data.urls.regular;

    const messageData = {
      image: {
        url: imageUrl
      },
      caption: "*𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳 𝚇𝙼𝙳*"
    };

    await sendMessage(message, messageData, { quoted: ms });
  } catch (error) {
    console.error("Error fetching wallpaper:", error);
  }
});
