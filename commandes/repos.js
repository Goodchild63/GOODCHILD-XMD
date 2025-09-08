"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "☢️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Goodchild63/GOODCHILD-XMD';
  const img = 'https://files.catbox.moe/8spkl4.jpeg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *𝕘𝕠𝕠𝕕𝕔𝕙𝕚𝕝𝕕_𝕩𝕞𝕕.*\n support our channel *by*, https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J

_________● *ʟᴇᴏɴᴀʀᴅ* ●____________
|☢️ *ℝ𝔼ℙ𝕆𝕊𝕀𝕋𝕆ℝ𝕐:* ${data.html_url}
|🌟 *𝕊𝕋𝔸ℝ𝔻:* ${repoInfo.stars}
|🍽 *𝔽𝕆ℝ𝕂𝕊:* ${repoInfo.forks}
|⌚️ *ℝ𝔼𝕃𝔼𝔸𝕊𝔼 𝔻𝔸𝕋𝔼:* ${releaseDate}
|🕐 *𝕌ℙ𝔻𝔸𝕋𝔼 𝕆ℕ:* ${repoInfo.lastUpdate}
|👨‍💻 *𝕆𝕎ℕ𝔼ℝ:* *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼ℂℍ*
|💞 *𝕋ℍ𝔼𝕄𝔼:* *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻*
|🥰 *𝕆ℕ𝕃𝕐 𝔾𝕆𝔻 ℂ𝔸ℕ 𝕁𝕌𝔻𝔾𝔼 𝕄𝔼!☢️*
__________________________________
            *𝕄𝔸𝔻𝔼 𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
