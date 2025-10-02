const { zokou } = require("../framework/zokou");
const s = require("../set");

zokou({
  nomCom: "settings",
  categorie: "User",
  reaction: "⚙️",
  desc: "View and change bot modes"
}, async (messageId, chatId, { repondre, arg }) => {
  if (!arg[0]) {
    const typingStatus = s.ETAT === "2" ? "✅ YES" : "❌ NO";
    const recordingStatus = s.ETAT === "3" ? "✅ YES" : "❌ NO";
    const onlineStatus = s.ETAT === "1" ? "✅ YES" : "❌ NO";
    const privateStatus = s.PRIVATE_MODE === "yes" ? "✅ YES" : "❌ NO";

    return repondre(
      `╭━━━[ ⚙️ GOODCHILD MD SETTINGS PANEL ]━━━╮\n\n` +
      `📌 *Current Modes:*\n` +
      `• Prefix: *${s.PREFIXE}*\n` +
      `• Typing: ${typingStatus}\n` +
      `• Recording: ${recordingStatus}\n` +
      `• Always Online: ${onlineStatus}\n` +
      `• Private Mode: ${privateStatus}\n\n` +
      `📌 *To change settings:*\n` +
      `• *${s.PREFIXE}settings setprefix [symbol]*\n` +
      `• *${s.PREFIXE}settings typing [on/off]*\n` +
      `• *${s.PREFIXE}settings recording [on/off]*\n` +
      `• *${s.PREFIXE}settings mode [private/public]*\n\n` +
      `✅ Done by goodchild williamz`
    );
  }

  const option = arg[0].toLowerCase();
  const value = arg[1];

  switch (option) {
    case "setprefix":
      if (!value) return repondre("❌ Please provide a new prefix symbol.");
      s.PREFIXE = value;
      return repondre(`✅ Prefix updated to *${value}*\n\nDone by goodchild williamz`);

    case "typing":
      if (!["on", "off"].includes(value)) return repondre("❌ Use 'on' or 'off' for typing.");
      s.ETAT = value === "on" ? "2" : "no";
      return repondre(`⌨️ Typing indicator ${value === "on" ? "enabled ✅" : "disabled ❌"}\n\nDone by goodchild williamz`);

    case "recording":
      if (!["on", "off"].includes(value)) return repondre("❌ Use 'on' or 'off' for recording.");
      s.ETAT = value === "on" ? "3" : "no";
      return repondre(`🎙️ Recording indicator ${value === "on" ? "enabled ✅" : "disabled ❌"}\n\nDone by goodchild williamz`);

    case "mode":
      if (!["private", "public"].includes(value)) return repondre("❌ Use 'private' or 'public'.");
      s.PRIVATE_MODE = value === "private" ? "yes" : "no";
      return repondre(`🔒 Bot mode set to *${value.toUpperCase()}*\n\nDone by goodchild williamz`);

    default:
      return repondre("❌ Invalid option. Type *.settings* to view available settings.");
  }
});
