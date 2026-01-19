const { keith } = require("../keizzah/keith");
const ai = require('unlimited-ai');
const axios = require('axios');
const fs = require('fs');
const conf = require(__dirname + "/../set");
const { repondre } = require(__dirname + "/../keizzah/context");

// Helper function to create contextInfo for replies
const getContextInfo = (title = '', userJid = '', thumbnailUrl = '') => ({
  mentionedJid: [userJid],
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363249464136503@newsletter",
    newsletterName: goodchild Tech Updates",
    serverMessageId: Math.floor(100000 + Math.random() * 900000),
  },
  externalAdReply: {
    showAdAttribution: true,
    title: title || conf.BOT,
    body: "Keep Leaning with Beltah Md",
    thumbnailUrl: thumbnailUrl || 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg',
    sourceUrl: conf.GURL || '',
    mediaType: 1,
    renderLargerThumbnail: false
  }
});

// General handler for API-based AI commands
const handleApiAiCommand = async (dest, zk, params, { url, usageExample, extract }) => {
  const { repondre, arg, senderName, ms } = params;
  const alpha = arg.join(" ").trim();

  if (!alpha) {
    return repondre(usageExample);
  }

  try {
    const { data } = await axios.get(url + encodeURIComponent(alpha));
    const answer = extract(data);

    if (!answer) {
      await repondre("AI failed to respond. Please try again later.");
      return;
    

    await zk.sendMessage(dest, {
      text: answer,
      contextInfo: getContextInfo(conf.BOT, senderName, 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg')
    }, { quoted: ms });
  } catch (error) {
    console.error("Error generating AI response:", error);
    await repondre("An error occurred while communicating with the AI.");
  }
};

// GPT Command
keith({
  nomCom: "goodchild",
  aliases: ["bot", "dj", "gpt", "gpt4", "bing"],
  reaction: '🤖',
  categorie: "ai"
}, async (dest, zk, params) => {
  await handleApiAiCommand(dest, zk, params, {
    url: "https://lance-frank-asta.onrender.com/api/gpt?q=",
    usageExample: "Please provide a message for the BELTAH-MD to respond.\nExample: `.beltah Hello`",
    extract: (data) => data?.message ? `🤖 *AI Response:*\n\n${data.message}` : null
  });
});

// OpenAI Command
keith({
  nomCom: "openai",
  aliases: ["chatgpt", "gpt3", "open-gpt"],
  reaction: '🧠',
  categorie: "ai"
}, async (dest, zk, params) => {
  await handleApiAiCommand(dest, zk, params, {
    url: "https://vapis.my.id/api/openai?q=",
    usageExample: "Please provide a message for OpenAI.\nExample: `.openai Hello`",
    extract: (data) => data?.result ? `🧠 *OpenAI Response:*\n\n${data.result}` : null
  });
});

// DeepSeek AI Command
keith({
  nomCom: "deepseek",
  aliases: ["deep", "seekai"],
  reaction: '🧠',
  categorie: "ai"
}, async (dest, zk, params) => {
  await handleApiAiCommand(dest, zk, params, {
    url: "https://api.ryzendesu.vip/api/ai/deepseek?text=",
    usageExample: "Please provide a message for DeepSeek AI.\nExample: `.deepseek Hello`",
    extract: (data) => data?.answer ? `🧠 *DeepSeek AI Response:*\n\n${data.answer}` : null
  });
});

// Gemini AI Command
keith({
  nomCom: "gemini",
  aliases: ["gemini4", "geminiai"],
  reaction: '🧠',
  categorie: "ai"
}, async (dest, zk, params) => {
  await handleApiAiCommand(dest, zk, params, {
    url: "https://bk9.fun/ai/gemini?q=",
    usageExample: "Please provide a message for Gemini AI.\nExample: `.gemini Hello`",
    extract: (data) => data?.BK9 ? `🧠 *Gemini AI Response:*\n\n${data.BK9}` : null
  });
});

// Llama AI Command
keith({
  nomCom: "llama",
  aliases: ["ilamaa", "ilamaai"],
  reaction: '🧠',
  categorie: "ai"
}, async (dest, zk, params) => {
  await handleApiAiCommand(dest, zk, params, {
    url: "https://bk9.fun/ai/llama?q=",
    usageExample: "Please provide a message for Llama AI.\nExample: `.llama Hello`",
    extract: (data) => data?.BK9 ? `🧠 *Llama AI Response:*\n\n${data.BK9}` : null
  });
});

// Beltahmd AI Command (Zoro persona)
keith({
  nomCom: "goodchildmd",
  aliases: ["goodchildmd", "goodchildbot"],
  reaction: '🛸',
  categorie: "ai"
}, async (dest, zk, params) => {
  await handleApiAiCommand(dest, zk, params, {
    url: "https://bk9.fun/ai/BK93?BK9=you%20are%20zoro%20from%20one%20piece&q=",
    usageExample: "Hello there, This is GOODCHILD-MD BOT, How may I help you with?",
    extract: (data) => data?.BK9 ? `🛸 *goodchildMd (Zoro) Response:*\n\n${data.BK9}` : null
  });
});
