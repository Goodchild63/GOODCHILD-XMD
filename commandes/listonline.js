const { zokou } = require("../framework/zokou");

zokou({
  nomCom: "listonline",
  categorie: "Group",
  reaction: "🟢",
  desc: "List all online members in the group"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, groupe } = commandeOptions;

  if (!groupe) {
    return repondre("❌ Hii command inafanya kazi tu ndani ya group.");
  }

  try {
    const metadata = await zk.groupMetadata(dest);
    const participants = metadata.participants;

    const onlineMembers = participants.filter(p => p.isOnline);
    if (onlineMembers.length === 0) {
      return repondre("😴 Hakuna member aliye online kwa sasa.");
    }

    const list = onlineMembers.map((p, i) => `${i + 1}. @${p.id.split("@")[0]}`).join("\n");
    await zk.sendMessage(dest, {
      text: `🟢 *Online Members:*\n\n${list}`,
      mentions: onlineMembers.map(p => p.id)
    }, { quoted: ms });
  } catch (e) {
    console.error("ListOnline Error:", e.message);
    await repondre("❌ Imeshindikana kupata orodha ya walio online.");
  }
});
