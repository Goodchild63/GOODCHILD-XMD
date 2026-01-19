const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
zokou({ nomCom: "menu", categorie: "General" }, async (dest, zk, commandeOptions) => {
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
╭━━〔 *${s.BOT}* 〕━━┈⊷
┃®╭───────────
┃®│➪ 𝙾𝚆𝙽𝙴𝚁 : ${s.OWNER_NAME}
┃®│➪ 𝙿𝚁𝙴𝙵𝙸𝚇𝙴 : [ ${s.PREFIXE} ] 
┃®│➪ 𝙼𝙾𝙳𝙴 : *${mode}*
┃®│➪ 𝙳𝙰𝚃𝙴  : *${date}* 
┃®│➪ 𝚁𝙰𝙼 : 8/132
┃®│➪ 𝙿𝙻𝙰𝚃𝙵𝙾𝙻𝙼𝙴 : *𝙻𝙸𝙽𝚄𝚇*
┃®│➪ 𝙲𝚁𝙴𝙰𝚃𝙾𝚁 : *𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳*
┃®└───────────···▸
╰──────────────┈⊷\n${readmore}`;
    let menuMsg = `𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳 𝙴𝙽𝙹𝙾𝚈 
`;
    for (const cat in coms) {
        menuMsg += `
╭──「 *${cat}* 」──┈⊷ 
┃╭──────────
┌┤ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
┃│👉  ${cmd}`    
        } 
        menuMsg +=`
┌┤
│╰────────┈⊷  
╰────────────┈⊷`
    }
    menuMsg += `
> 𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳 𝙾𝙽 𝙵𝙸𝚁𝙴\n
`;
   var lien = mybotpic();
   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
       zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
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
