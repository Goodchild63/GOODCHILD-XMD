const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "good", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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

┏𒊹 ⌜  𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ⌟ 𒊹
┃ 𒊹𝕄𝕆𝔻𝔼 : ${mode}
┃ 𒊹𝕌𝕊𝔼ℝ : ${s.OWNER_NAME}
┃ 𒊹𝕃𝕀𝔹𝕃𝔸ℝ𝕐 : Baileys
️┃ 𒊹ℙℝ𝔼𝔽𝕀𝕏 : ${s.PREFIXE}
️┃ 𒊹𝔻𝔸𝕋𝔼 : ${date}
┃ 𒊹𝕋𝕀𝕄𝔼 : ${temps}
┃ 𒊹𝕋𝕆𝕆𝕃𝕊 : ${cm.length}
┃ 𒊹ℝ𝔸𝕄 : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃ 𒊹ℍ𝕆𝔻𝕋 : ${os.platform()}
┗❏\n\n`;


    

let menuMsg = `
┏━━━━━━━━━┓
┣☢️ 𝔾𝕆𝕆𝔻ℂℍ𝕌𝕃𝔻 ℂ𝕄ℕ𝔻𝕊
┗━━━━━━━━━┛\n


`;



    for (const cat in coms) {

        menuMsg += `┏𒊹 *${cat}*`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃ ® ${cmd}`;

        }

        menuMsg += `
┗𒊹\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣𒊹𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻
┣𒊹𝔼ℕ𝕁𝕆𝕐𝔼 𝕃𝕀𝔽𝔼  
┗┳━━━━━━━━━━━━┳┛
┏┻━━━━━━━━━━━━┻┓
┃☢️ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻
┗━━━━━━━━━━━━━━┛\n


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
