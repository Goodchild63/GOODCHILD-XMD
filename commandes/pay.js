const { zokou } = require('../framework/zokou');

zokou({
  nomCom: 'pay',
  categorie: 'Utility',
  reaction: '💰'
}, async (msg, sock, { repondre }) => {
  const paymentDetails = `
╭───❖ 💳 *PAYMENT OPTIONS* ❖───╮
│
│ 📲 *Network:* M-Pesa (Vodacom Tanzania)
│ 👤 *Receiver Name:* William David
│
│ 🔹 *Option 1: Lipa Namba*
│     • Lipa Namba: *68700269*
│     • Reference: *Goodchild XMD*
│
│ 🔹 *Option 2: Phone Number*
│     • Number: *255794910602*
│     • Reference: *Goodchild XMD*
│
╰──────────────────────────────╯

🧾 *Steps to Pay:*
1️⃣ Open M-Pesa menu
2️⃣ Choose either "Lipa kwa M-Pesa" or "Send Money"
3️⃣ Enter the number: *68700269* or *255794910602*
4️⃣ Confirm name: *William David*
5️⃣ Enter amount
6️⃣ Use reference: *Goodchild XMD*

🎉 *Thank you for supporting Goodchild XMD!*
Your contribution helps us grow and serve you better.

🤝 We appreciate your trust and loyalty.
For any issues or confirmation, reply with: *.support*

🔐 Powered by *Goodchild williamz 🇹🇿*
`;

  await sock.sendMessage(msg, { text: paymentDetails }, { quoted: msg });
});
