const axios = require('axios');

async function soraCommand(sock, chatId, message) {
    try {
        const rawText = message.message?.conversation?.trim() ||
            message.message?.extendedTextMessage?.text?.trim() ||
            message.message?.imageMessage?.caption?.trim() ||
            message.message?.videoMessage?.caption?.trim() || '';

        const used = (rawText || '').split(/\s+/)[0] || '.sora';
        const args = rawText.slice(used.length).trim();
        const quoted = message.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        const quotedText = quoted?.conversation || quoted?.extendedTextMessage?.text || '';
        const input = args || quotedText;

        if (!input) {
            await sock.sendMessage(chatId, {
                text: '📌 Provide a prompt.\n\nExample: .sora anime girl with short blue hair'
            }, { quoted: message });
            return;
        }

        const apiUrl = `https://okatsu-rolezapiiz.vercel.app/ai/txt2video?text=${encodeURIComponent(input)}`;
        const { data } = await axios.get(apiUrl, {
            timeout: 60000,
            headers: { 'user-agent': 'Mozilla/5.0' }
        });

        const videoUrl = data?.videoUrl || data?.result || data?.data?.videoUrl;
        if (!videoUrl) {
            throw new Error('No videoUrl in API response');
        }

        // Send the video with watermark in caption
        await sock.sendMessage(chatId, {
            video: { url: videoUrl },
            mimetype: 'video/mp4',
            caption: `🎥 Prompt: ${input}\n\n💠 Watermark: Goodchild Williamz 👑`
        }, { quoted: message });

        // Send branding message after video
        await sock.sendMessage(chatId, {
            text: '🔐 Powered by Goodchild Williamz 👑'
        }, { quoted: message });

    } catch (error) {
        console.error('[SORA] error:', error?.message || error);
        await sock.sendMessage(chatId, {
            text: '❌ Failed to generate video. Try a different prompt later.'
        }, { quoted: message });
    }
}

module.exports = soraCommand;
