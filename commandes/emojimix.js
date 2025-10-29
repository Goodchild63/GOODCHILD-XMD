const { zokou } = require('../framework/zokou');
const fetch = require('node-fetch');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

zokou({
  nomCom: 'emojimix',
  categorie: 'Fun',
  reaction: '🎴'
}, async (msg, sock, { repondre }) => {
  try {
    const text = msg.message?.conversation?.trim() ||
                 msg.message?.extendedTextMessage?.text?.trim() || '';

    const args = text.split(' ').slice(1);

    if (!args[0]) {
      await sock.sendMessage(msg, {
        text: '🎴 Example: .emojimix 😎+🥰'
      }, { quoted: msg });
      return;
    }

    if (!text.includes('+')) {
      await sock.sendMessage(msg, {
        text: '✳️ Separate the emojis with a *+* sign\n\n📌 Example:\n.emojimix 😎+🥰'
      }, { quoted: msg });
      return;
    }

    let [emoji1, emoji2] = args[0].split('+').map(e => e.trim());

    const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      await sock.sendMessage(msg, {
        text: '❌ These emojis cannot be mixed! Try different ones.'
      }, { quoted: msg });
      return;
    }

    const imageUrl = data.results[0].url;

    const tmpDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir, { recursive: true });
    }

    const tempFile = path.join(tmpDir, `temp_${Date.now()}.png`).replace(/\\/g, '/');
    const outputFile = path.join(tmpDir, `sticker_${Date.now()}.webp`).replace(/\\/g, '/');

    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.buffer();
    fs.writeFileSync(tempFile, buffer);

    const ffmpegCommand = `ffmpeg -i "${tempFile}" -vf "scale=512:512:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000" "${outputFile}"`;

    await new Promise((resolve, reject) => {
      exec(ffmpegCommand, (error) => {
        if (error) {
          console.error('FFmpeg error:', error);
          reject(error);
        } else {
          resolve();
        }
      });
    });

    if (!fs.existsSync(outputFile)) {
      throw new Error('Failed to create sticker file');
    }

    const stickerBuffer = fs.readFileSync(outputFile);

    await sock.sendMessage(msg, {
      sticker: stickerBuffer
    }, { quoted: msg });

    await sock.sendMessage(msg, {
      text: '🔐 Powered by Goodchild Williamz 👑'
    }, { quoted: msg });

    try {
      fs.unlinkSync(tempFile);
      fs.unlinkSync(outputFile);
    } catch (err) {
      console.error('Error cleaning up temp files:', err);
    }

  } catch (error) {
    console.error('Error in emojimix command:', error);
    await sock.sendMessage(msg, {
      text: '❌ Failed to mix emojis! Make sure you\'re using valid emojis.\n\nExample: .emojimix 😎+🥰'
    }, { quoted: msg });
  }
});
