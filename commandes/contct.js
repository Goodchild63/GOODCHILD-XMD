const { zokou } = require("../framework/zokou");
const moment = require("moment-timezone");
const { getBuffer } = require("../framework/dl/Function");
const { default: axios } = require('axios');

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


zokou({ nomCom: 'love',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*You came as an unexpected person in my life.....Now you are most important person in my life I love ❤️❤️💠 you forever and always.*`) 

   


  }
);


zokou({ nomCom: 'getall',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '👊', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_getting all members_*`) 

   


  }
);

zokou({ nomCom: 'go',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📄', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*𝚒𝚖 𝚊𝚕𝚒𝚟𝚎*`)
   


  }
);

zokou({ nomCom: 'channel',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🪐', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J`) 

   


  }
);
zokou({ nomCom: 'rtime',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '⭕', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`ʜᴇʟʟᴏ.... ɪ'ᴍ ʜᴀᴘᴘʏ ᴛᴏ sᴇᴇ ʏᴏᴜ

𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳 𝚇𝙼𝙳 ᴏᴡɴᴇʀ sᴀʏs ᴍᴏsᴛ ᴏғ ᴜᴘᴅᴀᴛᴇs ᴀʀᴇ ᴀʀᴏᴜɴᴅ ᴛʜᴇ ᴄᴏʀɴᴇʀ... ʏᴏᴜ ᴡɪʟʟ ᴇɴᴊᴏʏ ᴍᴏʀᴇ ᴄᴏᴍᴍᴀɴᴅs ᴀs ʜᴇ ᴀᴅᴅs ᴛʜᴇᴍ...

....ᴜsᴇ ᴍᴇ ᴄᴀʀᴇғᴜʟʟʏ 

ɪ ʟᴏᴠᴇ ʏᴏᴜ`) 

   


  }
);

zokou({ nomCom: 'channel1',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '💠', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`tap here to join my second channel https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J`) 

   


  }
);


zokou({ nomCom: 'goodchild',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '👻', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳 is running...... Love it_*`) 

   


  }
);


zokou({ nomCom: 'vision',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🔎', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_ᴏᴜʀ ᴍɪssɪᴏɴ ɪs ᴛᴏ ʟᴇᴛ ʏᴏᴜ ᴇɴᴊᴏʏ ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ.... 🥰 feel ʟᴏᴠd there _*`) 

   


  }
);


  
zokou({ nomCom: 'group1',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '🗣', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`top a link to join our group https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J `) 

   


  }
)


zokou({ nomCom: 'script',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '💫', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`tap here to join our support channel https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J`) 



  }
)


zokou({ nomCom: 'bot',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '👻', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*_YESS BOSS 'AM LISTENING TO YOU_*`) 

   


  }
);


zokou({ nomCom: 'me',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '👻', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(`*check the developer via https://wa.me/255784404448*`) 

   


  }
);


zokou({ nomCom: 'problem',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '👻', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;

                 await repondre(` ┏━━━━━━━━━━━━━━
┃𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳 🎉🎉🎉 
| 𝚆𝙴 𝙽𝙴𝚅𝙴𝚁 
┃𝙳𝙸𝙴♦
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator = 𖥘 𝙻𝚎𝚘𝚗𝚊𝚛𝚍 𖥘
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029VbBAqgd4inooNwRQ4K0J
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
Please Follow My Support Channel
Wanna talk to me?👉 https://wa.me/255784404448 👈
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
© *𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳 𝚇𝙼𝙳 *`) 

   


  }
);
