const fs = require('fs');
const path = require('path');

module.exports = {
  name: 'reload',
  alias: ['refresh', 'reboot'],
  category: 'Owner',
  desc: 'Reload all bot commands dynamically without redeploying',
  use: '',
  async exec(sock, m, args, store, settings) {
    try {
      // Clear existing commands
      global.commands = new Map();

      // Read all command files
      const commandFiles = fs.readdirSync(path.join(__dirname)).filter(file => file.endsWith('.js') && file !== 'reload.js');

      // Reload each command
      for (const file of commandFiles) {
        const filePath = path.join(__dirname, file);
        delete require.cache[require.resolve(filePath)];
        const cmd = require(filePath);
        if (cmd.name) {
          global.commands.set(cmd.name, cmd);
        }
      }

      // Send success message
      await sock.sendMessage(m.chat, { text: '✅ *Commands reloaded successfully!*' }, { quoted: m });
    } catch (err) {
      // Send error message
      await sock.sendMessage(m.chat, { text: '❌ *Reload failed:* ' + err.message }, { quoted: m });
    }
  }
};
