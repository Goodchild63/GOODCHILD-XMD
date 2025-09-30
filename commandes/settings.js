zokou({
  nomCom: "settings",
  categorie: "Settings",
  reaction: "🛠️",
  desc: "View and manage bot settings"
}, async (messageId, chatId, { repondre, ms, superUser }) => {
  if (!superUser) {
    return repondre("⛔ Hii command ni ya developer pekee.\n\n✅ Done by goodchild williamz");
  }

  const statusIcon = (val) => {
    return val === 'yes' || val === '1' || val === '2' || val === '3' ? '✅' : '❌';
  };

  const dashboard = `
╭━━━[ GOODCHILD MD SETTINGS ]━━━╮

📵 Anti-call: ${statusIcon(s.ANTI_CALL)}
💖 Auto-react: ${statusIcon(s.AUTO_REACT)}
👀 Auto-read status: ${statusIcon(s.AUTO_READ_STATUS)}
🔒 Private mode: ${statusIcon(s.PRIVATE_MODE)}

🟢 Always Online: ${s.ETAT === '1' ? '✅' : '❌'}
⌨️ Auto Typing: ${s.ETAT === '2' ? '✅' : '❌'}
🎙️ Auto Record: ${s.ETAT === '3' ? '✅' : '❌'}

╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

📌 To change settings:
• *.anticall yes* / *.anticall no*
• *.autoreact yes* / *.autoreact no*
• *.privatemode yes* / *.privatemode no*
• *.autoreadstatus yes* / *.autoreadstatus no*
• *.alwaysonline yes* / *.alwaysonline no*
• *.autotyping yes* / *.autotyping no*
• *.autorecord yes* / *.autorecord no*

✅ Done by goodchild williamz
`;

  await repondre(dashboard);
});
