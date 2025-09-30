const statusText = (val, label, emoji) => {
  return `• ${emoji} ${label}: ${val === 'yes' || val === '1' || val === '2' || val === '3' ? '✅ ENABLED' : '❌ DISABLED'}`;
};

const dashboard = `
╭━━━[ GOODCHILD MD SETTINGS ]━━━╮

${statusText(s.ANTI_CALL, "Anti-call", "📵")}
${statusText(s.AUTO_REACT, "Auto-react", "💖")}
${statusText(s.AUTOREADSTATUS, "Auto-read status", "👀")}
${statusText(s.PRIVATE_MODE, "Private mode", "🔒")}
${statusText(s.ETAT === '1' ? 'yes' : 'no', "Always Online", "🟢")}
${statusText(s.ETAT === '2' ? 'yes' : 'no', "Auto Typing", "⌨️")}
${statusText(s.ETAT === '3' ? 'yes' : 'no', "Auto Record", "🎙️")}

╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

📌 To change any setting:
• .anticall yes or .anticall no
• .autoreact yes or .autoreact no
• .privatemode yes or .privatemode no
• .autoreadstatus yes or .autoreadstatus no
• .alwaysonline yes or .alwaysonline no
• .autotyping yes or .autotyping no
• .autorecord yes or .autorecord no

✅ Done by goodchild williamz
`;
