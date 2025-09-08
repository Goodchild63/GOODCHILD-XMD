const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "list", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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



    moment.tz.setDefault(s.TZ);



// Créer une date et une heure en GMT

const temps = moment().format('HH:mm:ss');

const date = moment().format('DD/MM/YYYY');



  let infoMsg =  `
╭────© *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻* ©────©
      𝕄𝔸𝔻𝔼 𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ☢️ 
     ╭──────────────
|  *ℙℝ𝔼𝔽𝕀𝕏* : ${s.PREFIXE}
|  *ℙℝ𝕆ℙℝ𝕀𝔼𝕋𝔸𝕀ℝ𝔼* : ${s.OWNER_NAME}
|  *𝕄𝕆𝔻𝔼* : ${mode}
|  *ℂ𝕆𝕄𝕄𝔸ℕ𝔻𝔼𝕊* : ${cm.length}
|  *𝔻𝔸𝕋𝔼* : ${date}
|  *ℍ𝕆𝕌ℝ* : ${temps}
|  *ℝ𝔸𝕄* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
|  *ℙ𝕃𝔸𝕋𝔽𝕆ℝ𝕄𝔼* : ${os.platform()}
|  *𝔻𝔼𝕍𝔼𝕃𝕆ℙ𝔼ℝ* : *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼ℂℍ*
|  *ℕ𝔸𝕋𝕀𝕆ℕ* : 𝕋𝔸ℕℤ𝔸ℕ𝕀𝔸
|  *𝕍𝔼ℝ𝕊𝕀𝕆ℕ*    : 𝕍10.0.0
    ╰───────────────
╰─────©𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻©─────© \n\n`;
    
    let menuMsg = `
𝕋ℍ𝕀𝕊 𝕀𝕊 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼ℂℍ*


> *𝔼ℕ𝕁𝕆𝕐 𝕋ℍ𝔼 ℕ𝔼𝕎 𝕍𝔼ℝ𝕊𝕀𝕆ℕ ☢️*
`;

    if (commandeOptions.categorie) {
        const categorieSelectionnee = commandeOptions.categorie;
        if (coms[categorieSelectionnee]) {
            menuMsg += `╭────© © ${categorieSelectionnee} © ©────`;
            for (const cmd of coms[categorieSelectionnee]) {
                menuMsg += `
*☞︎︎︎ ${cmd}*`;
            }
            menuMsg += `
╰═════════════©\n`;
        } else {
            menuMsg += `La catégorie "${categorieSelectionnee}" n'existe pas.\n`;
        }
    } else {
        for (const cat in coms) {
            menuMsg += `╭────© © ${cat} © ©────`;
            for (const cmd of coms[cat]) {
                menuMsg += `
*☞︎︎ ${cmd}*`;
            }
            menuMsg += `
╰═════════════© \n`;
        }
    }

    menuMsg += `
◇            ◇
*©©©————— © —————©©©*
" ☢️☢️☢️☢️☢️☢️☢️."
 
 *𝔻𝔼𝕍𝔼ℝ𝕆ℙ𝔼𝔻 𝔹𝕐 *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼ℂℍ*
*©©©—————    ©   —————©©©*
`;

    var lien = mybotpic();

    if (lien.match(/\.(mp4|gif)$/i)) {
        try {
            zk.sendMessage(dest, { video: { url: lien }, caption: infoMsg + menuMsg, footer: "Je suis *Leonard-MD*, développé par LEONARD-TECH" , gifPlayback : true }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
        try {
            zk.sendMessage(dest, { image: { url: lien }, caption: infoMsg + menuMsg, footer: "Je suis *Leonard-MD*, développé par LEONARD-TECH" }, { quoted: ms });
        } catch (e) {
            console.log("🥵🥵 Menu erreur " + e);
            repondre("🥵🥵 Menu erreur " + e);
        }
    } else {
        repondre(infoMsg + menuMsg);
    }
});
