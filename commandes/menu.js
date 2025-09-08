const util = require('util');

const fs = require('fs-extra');

const { zokou } = require(__dirname + "/../framework/zokou");

const { format } = require(__dirname + "/../framework/mesfonctions");

const os = require("os");

const moment = require("moment-timezone");

const s = require(__dirname + "/../set");



zokou({ nomCom: "menu2", categorie: "Menu" }, async (dest, zk, commandeOptions) => {

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

┏━━ 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 ━━┓
┃   𝕄𝕆𝔻𝔼: ${mode}
┃   𝕌𝕊𝔼ℝ : ${s.OWNER_NAME}
┃
┣━𝔾𝕠𝕠𝕕𝕔𝕙𝕚𝕕 md new vision 𒈒━➠
┗━━━𒈒by 𝔾𝕠𝕠𝕕𝕔𝕙𝕚𝕝𝕕 𝕏𝕞𝕕𒈒━━┛\n\n`;


    

let menuMsg = `
┏━━━━━━━━━━━━━━┓
┣™𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻  
┣™𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼ℂℍ
┗━━━━━━━━━━━━━━┛\n




Goodchild md cmds𒈒
`;



    for (const cat in coms) {

        menuMsg += `┏━━━━━⚼ ${cat}`;

        for (const cmd of coms[cat]) {

            menuMsg += `
┃☘ ${cmd}`;

        }

        menuMsg += `
┗━━━━━━━━━━━━━━┛\n`

    }



    menuMsg += `


︎┏━━━━━━━━━━━━━━┓
️┣❏𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕏𝕄𝔻 
┣❏𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼ℂℍ 
┗━━━━━━━━━━━━━━┛\n


┏━━━━━━━━━━━━━━┓
┃●ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕆𝕆𝔻ℂℍ𝕀𝕃𝔻 𝕋𝔼𝔸𝕄 
┗━━━━━━━━━━━━━━┛\n


`;



   var lien = mybotpic();



   if (lien.match(/\.(mp4|gif)$/i)) {

    try {

        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *LEONARD-MD*, déveloper Fredie" , gifPlayback : true }, { quoted: ms });

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
          
