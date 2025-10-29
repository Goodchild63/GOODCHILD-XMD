const { zokou } = require('../framework/zokou');
const axios = require('axios');

zokou({
  nomCom: 'sora',
  categorie: 'AI',
  reaction: '🎥'
}, async (msg, sock, { repondre }) => {
  try {
    const rawText = msg.message?.conversation?.trim() ||
      msg.message?.extendedTextMessage?.text?.trim() ||
      msg.message?.imageMessage?.caption?.trim() ||
      msg.message?.videoMessage?.caption?.trim() || '';

    const used = (rawText || '').split(/\s+/)[0] || '.sora';
    const args = rawText.slice(used.length).trim();
    const quoted = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const quotedText = quoted?.conversation || quoted?.extendedTextMessage?.text || '';
    const input = args || quotedText;

    if (!input) {
      await sock.sendMessage(msg, {
        text: '📌 Provide a prompt.\n\nExample: .sora anime girl with short blue hair'
      }, { quoted: msg });
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

    await sock.sendMessage(msg, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: `🎥 Prompt: ${input}\n\n💠 Watermark: Goodchild Williamz 👑`
    }, { quoted: msg });

    await sock.sendMessage(msg, {
      text: '🔐 Powered by Goodchild Williamz 👑'
    }, { quoted: msg });

  } catch (error) {
    console.error('[SORA] error:', error?.message || error);
    await sock.sendMessage(msg, {
      text: '❌ Failed to generate video. Try a different prompt later.'
    }, { quoted: msg });
  }
});
