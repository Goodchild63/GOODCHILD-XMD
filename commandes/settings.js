'use strict';

const { zokou } = require("../framework/zokou");
const s = require("../set");

// Helper function for toggle commands
async function handleSettingCommand(commandeOptions, settingName, settingKey, responses = {}) {
  const { repondre, arg, superUser } = commandeOptions;

  if (!superUser) {
    return repondre("⛔ This command is restricted to the bot owner only.\n\n✅ Done by goodchild williamz");
  }

  if (!arg[0]) {
    return repondre(
      `⚙️ *${settingName} Settings*\n\n` +
      `• *${s.PREFIXE}${settingKey} yes* - Enable\n` +
      `• *${s.PREFIXE}${settingKey} no* - Disable\n` +
      `• *${s.PREFIXE}${settingKey} status* - Check current status\n\n✅ Done by goodchild williamz`
    );
  }

  const option = arg[0].toLowerCase();
  let responseMessage = '';

  switch (option) {
    case "yes":
      s[settingKey] = 'yes';
      responseMessage = responses.enabled || `${settingName} has been enabled successfully.\n\n✅ Done by goodchild williamz`;
      break;
    case "no":
      s[settingKey] = 'no';
      responseMessage = responses.disabled || `${settingName} has been disabled successfully.\n\n✅ Done by goodchild williamz`;
      break;
    case "status":
      const status = s[settingKey] === 'yes' ? 'ENABLED ✅' : 'DISABLED ❌';
      responseMessage = `🛠️ ${settingName} Status: ${status}\n\n✅ Done by goodchild williamz`;
      break;
    default:
      return repondre(`❌ Invalid option. Use *${s.PREFIXE}${settingKey} yes/no/status*\n\n✅ Done by goodchild williamz`);
  }

  await repondre(responseMessage);
}

// Individual setting commands
zokou({ nomCom: 'anticall', categorie: "Settings", reaction: "📵", desc: "Block incoming calls to the bot" },
  async (dest, zk, commandeOptions) => {
    await handleSettingCommand(commandeOptions, "Anti-call", "ANTI_CALL");
  });

zokou({ nomCom: 'autoreact', categorie: "Settings", reaction: "💖", desc: "Automatically react to messages" },
  async (dest, zk, commandeOptions) => {
    await handleSettingCommand(commandeOptions, "Auto-react", "AUTO_REACT");
  });

zokou({ nomCom: 'autoreadstatus', categorie: "Settings", reaction: "👀", desc: "Automatically read status updates" },
  async (dest, zk, commandeOptions) => {
    await handleSettingCommand(commandeOptions, "Auto-read status", "AUTO_READ_STATUS");
  });

zokou({ nomCom: 'privatemode', categorie: "Settings", reaction: "🔒", desc: "Restrict bot to owner only" },
  async (dest, zk, commandeOptions) => {
    await handleSettingCommand(commandeOptions, "Private mode", "PRIVATE_MODE", {
      enabled: "🔒 Bot is now in PRIVATE MODE (owner only)\n\n✅ Done by goodchild williamz",
      disabled: "🔓 Bot is now in PUBLIC MODE\n\n✅ Done by goodchild williamz"
    });
  });

// ETAT-based commands
const etatCommands = [
  { name: 'autorecord', value: '3', desc: "Auto-record voice messages" },
  { name: 'autotyping', value: '2', desc: "Show typing indicators" },
  { name: 'alwaysonline', value: '1', desc: "Show always online status" }
];

etatCommands.forEach(cmd => {
  zokou({
    nomCom: cmd.name,
    categorie: "Settings",
    reaction: "⚙️",
    desc: cmd.desc
  }, async (dest, zk, commandeOptions) => {
    const { repondre, arg, superUser } = commandeOptions;

    if (!superUser) {
      return repondre("⛔ This command is restricted to the bot owner only.\n\n✅ Done by goodchild williamz");
    }

    if (!arg[0]) {
      return repondre(
        `⚙️ *${cmd.name.toUpperCase()} Settings*\n\n` +
        `• *${s.PREFIXE}${cmd.name} yes* - Enable\n` +
        `• *${s.PREFIXE}${cmd.name} no* - Disable\n\n✅ Done by goodchild williamz`
      );
    }

    const option = arg[0].toLowerCase();
    if (option === "yes") {
      s.ETAT = cmd.value;
      await repondre(`${cmd.desc} has been enabled successfully.\n\n✅ Done by goodchild williamz`);
    } else if (option === "no") {
      s.ETAT = 'no';
      await repondre(`${cmd.desc} has been disabled successfully.\n\n✅ Done by goodchild williamz`);
    } else {
      await repondre(`❌ Invalid option. Use *${s.PREFIXE}${cmd.name} yes/no*\n\n✅ Done by goodchild williamz`);
    }
  });
});

// Settings dashboard command
zokou({
  nomCom: "settings",
  categorie: "Settings",
  reaction: "🛠️",
  desc: "View and manage bot settings"
}, async (messageId, chatId, { repondre, ms, superUser }) => {
  if (!superUser) {
    return repondre("⛔ This command is restricted to the bot owner only.\n\n✅ Done by goodchild williamz");
  }

  const statusText = (val, label) => {
    return `• *${label}:* ${val === 'yes' || val === '1' || val === '2' || val === '3' ? '✅ ENABLED' : '❌ DISABLED'}`;
  };

  const dashboard = `
🛠️ *BOT SETTINGS DASHBOARD*

${statusText(s.ANTI_CALL, "Anti-call")}
${statusText(s.AUTO_REACT, "Auto-react")}
${statusText(s.AUTO_READ_STATUS, "Auto-read status")}
${statusText(s.PRIVATE_MODE, "Private mode")}
${statusText(s.ETAT === '1' ? 'yes' : 'no', "Always Online")}
${statusText(s.ETAT === '2' ? 'yes' : 'no', "Auto Typing")}
${statusText(s.ETAT === '3' ? 'yes' : 'no', "Auto Record")}

📌 *To change any setting:*
Use commands like:
• *.anticall yes* or *.anticall no*
• *.autoreact yes* or *.autoreact no*
• *.privatemode yes* or *.privatemode no*
• *.autoreadstatus yes* or *.autoreadstatus no*
• *.alwaysonline yes* or *.alwaysonline no*
• *.autotyping yes* or *.autotyping no*
• *.autorecord yes* or *.autorecord no*

✅ *Done by goodchild williamz*
`;

  await chatId.sendMessage(messageId, {
    text: dashboard
  }, {
    quoted: ms
  });
});
