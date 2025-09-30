const { zokou } = require("../framework/zokou");

const DEVELOPER_NUMBER = "255784404448"; // Namba yako bila @s.whatsapp.net
let silentGroups = {};

zokou({
  nomCom: "silentmode",
  categorie: "Owner",
  reaction: "🔕",
  desc: "Enable silent mode for this group (only developer or owner)"
}, async (messageId, chatId, { repondre, sender, arg, zk }) => {
  if (!chatId.endsWith("@g.us")) {
    return repondre("❌ Command hii inafanya kazi tu ndani ya group.");
  }

  const rawSender = sender.replace("@s.whatsapp.net", "");
  const metadata = await zk.groupMetadata(chatId);
  const isGroupOwner = metadata.owner && metadata.owner.includes(rawSender);
  const isDeveloper = rawSender === DEVELOPER_NUMBER;

  if (!isDeveloper && !isGroupOwner) {
    return repondre("❌ Hii command inaruhusiwa kwa developer au owner wa group pekee.");
  }

  const mode = arg.join(" ").toLowerCase().trim();
  const activate = mode === "on" || mode === "yes";

  silentGroups[chatId] = activate;

  const status = activate ? "imewashwa" : "imezimwa";
  await repondre(`🔕 *Silent Mode ${status}* kwa group hili.\n👑 Ruhusa ya kujibu sasa ni ya developer au owner pekee.`);
});

// Hook ya kuzuia majibu kwa group zenye silent mode
zokou({
  nomCom: "hook",
  categorie: "System"
}, async (messageId, chatId, { repondre, sender }) => {
  const rawSender = sender.replace("@s.whatsapp.net", "");
  const isSilent = silentGroups[chatId];

  if (isSilent && rawSender !== DEVELOPER_NUMBER) {
    return; // Bot inanyamaza kabisa kwa wengine
  }

  // Hapa unaweza kuweka logic ya majibu ya kawaida
});
