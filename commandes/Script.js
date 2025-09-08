const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "script", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 𝕀𝕄ℙ𝕆ℝ𝕋𝔸ℕ𝕋 𝕀ℕ𝔽𝕆* 
©───────────────────©
*𝔾𝕀𝕋ℍ𝕌𝔹 𝕃𝕀ℕ𝕂*
> https://github.com/Goodchild63/GOODCHILD-XMD

*𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ ℂℍ𝔸ℕℕ𝔼𝕃*
> https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J

*𝔽𝕆ℝ 𝕄𝕆ℝ𝔼 𝕋𝔸ℙ 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝔹𝔼𝕃𝕆𝕎*
> https://github.com/Goodchild63
╭───────────────────©
│©⁠⁠⁠⁠ *ℝ𝔸𝕄* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│©⁠⁠⁠⁠ *𝔻𝔼𝕍* : *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻*
⁠⁠⁠⁠╰───────────────────©
  `;
    
let menuMsg = `
     𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻

©────────────────────©`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *leonardmd*, déveloper Leonard Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Leonardmd*, déveloper Leonard Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 
                              
