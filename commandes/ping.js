const {
  zokou
} = require("./../framework/zokou");
const {
  format,
  runtime
} = require('../framework/mesfonctions');
const os = require('os');
const speed = require('performance-now');
const {
  performance
} = require('perf_hooks');
const conf = require('../set');

zokou(
  {
    nomCom: 'ping',
    categorie: 'General',
    reaction: '😌',
    alias: ['p']
  },

  async (dest, zk, commandOptions) => {
    const {
      ms, arg, repondre
    } = commandOptions;
    const start = new Date().getTime();
    const msg = await zk.sendMessage(dest, {
      text: '*𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚁𝚄𝙽𝙽𝙸𝙽𝙶!!!*',
    }, {
      quoted: ms
    });
    const end = new Date().getTime();
    const ping = end - start;
    await zk.sendMessage(dest, {
      text: `*𝙶𝙾𝙾𝙳𝙲𝙷𝙸𝙻𝙳-𝚇𝙼𝙳 𝙸𝚂*
 *${ping} 𝙼𝚂*`, edit: {
        id: msg.key.id, remoteJid: dest
      }});
    await zk.sendMessage(dest, {
      react: {
        text: "💞", key: ms.key
      }})
  }
)
