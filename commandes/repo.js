Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "💥", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Goodchild63/GOODCHILD-XMD';
  const img = 'https://files.catbox.moe/cl3ra4.jpg';

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
this is* *Goodchild_xmd.*\n

_________● *𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳* ●____________
|💥 *𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝚈:* ${data.html_url}
|🌟 *𝚂𝚃𝙰𝚁𝚂:* ${repoInfo.stars}
|🍽 *𝙵𝙾𝚁𝙺𝚂:* ${repoInfo.forks}
|⌚️ *𝚁𝙴𝙻𝙴𝙰𝚂𝙴 𝙳𝙰𝚃𝙴:* ${releaseDate}
|🕐 *𝚄𝙿𝙳𝙰𝚃𝙴 𝙾𝙽:* ${repoInfo.lastUpdate}
|👨‍💻 *𝙾𝚆𝙽𝙴𝚁:* *GOODCHILD WILLIAMZ*
|💞 *𝚃𝙷𝙴𝙼𝙴:* *𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳*
|🥰 *𝙾𝙽𝙻𝚈 𝙶𝙾𝙳 𝙲𝙰𝙽 𝙹𝚄𝙳𝙶𝙴 𝙼𝙴! 💞*
__________________________________
            *𝙼𝙰𝙳𝙴 𝚆𝙸𝚃𝙷 GOODCHILD WILLIAMZ*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
