const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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

╔════➻⊷➻════──©
║ ⦿━═━© *𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻* ©━═━©
║ ☞ 𝕄𝕆𝔻𝔼 : ${mode}
║ ☞ 𝕌𝕊𝔼ℝ : ${s.OWNER_NAME}
║ ☞ 𝕃𝕀𝔹ℝ𝔸ℝ𝕐 : Baileys
║ ☞ ℙℝ𝔼𝔽𝕀𝕏 : ${s.PREFIXE}
║ ☞ 𝔻𝔸𝕋𝔼 : ${date}
║ ☞ 𝕋𝕀𝕄𝔼 : ${temps}
║ ☞ 𝕋𝕆𝕆𝕃𝕊 : ${cm.length}
║ ☞ ℝ𝔸𝕄 : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
║ ☞ ℍ𝕆𝕊𝕋 : ${os.platform()}
║ ⦿━━━━═════━━━━⦿
╚════➻⊷➻════───©\n\n`;


    

let menuMsg = `
╭──━━©━━────© 
│╔════➳════╗
│║© _*𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻*_
│╚════➳════╝
╰──━━©━━────©\n

> 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 ℂ𝕆𝕄ℕ𝔻𝕊 ☢️
`;



    for (const cat in coms) {

        menuMsg += ` ╔═© _*${cat}*_ ©═━━©`;

        for (const cmd of coms[cat]) {
            
            menuMsg += `
║➪ ${cmd}`;

        }

        menuMsg += `
╚══━━━━═══©
©══════© 
║© _*𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ☢️*_
©══════© 
©━━━━━━━━━©\n`

    }



    menuMsg += `


 ©═════════©
 ║© _*𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 2025*_
 ║© _*𝔼ℕ𝕁𝕆𝕐 𝔽𝕆ℝ 𝕌𝕊𝕀ℕ𝔾*_ 
 ©═════════©
 ©━━━━═════© 
 ┃╔══════════════╗
 ┃║© _*ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ☢️*_
 ┃╚══════════════╝
 ©━━━━═════© \n

> 𝕂𝔼𝔼ℙ 𝕌𝕊𝕀ℕ𝔾 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ☢️
`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-BOT*, déveloper Cod3uchiha" , gifPlayback : true }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

// Vérification pour .jpeg ou .png

else if (lien.match(/\.(jpeg|png|jpg)$/i)) {

    try {

        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *TKM-bot*, déveloper cod3uchiha" }, { quoted: ms });

    }

    catch (e) {

        console.log("🥵🥵 Menu error " + e);

        repondre("🥵🥵 Menu error " + e);

    }

} 

else {

    

    repondre(infoMsg + menuMsg);

    

}



});
