const { BOT_EMOJI } = require("../config");
const { extractDataFromMessage, baileysIs, download } = require(".");
const { waitMessage } = require("./messages");
const { NUMBERS_HOSTS } = require("../config");
const { isAdminGroup } = require("../utils");

exports.loadCommomFunctions = ({ bot, baileysMessage }) => {
  const {
    remoteJid,
    prefix,
    commandName,
    args,
    idMessage,
    participant,
    fromMe,
    isGroup,
    nickName,
    user,
  } = extractDataFromMessage(baileysMessage);

  const isImage = baileysIs(baileysMessage, "image");
  const isVideo = baileysIs(baileysMessage, "video");
  const isSticker = baileysIs(baileysMessage, "sticker");

  const downloadImage = async (baileysMessage, fileName) =>
    await download(baileysMessage, fileName, "image", "png");

  const downloadSticker = async (baileysMessage, fileName) =>
    await download(baileysMessage, fileName, "sticker", "webp");

  const downloadVideo = async (baileysMessage, fileName) =>
    await download(baileysMessage, fileName, "video", "mp4");

  const sendText = async (text) =>
    await bot.sendMessage(remoteJid, { text: `${BOT_EMOJI} ${text}` });

  const sendTextOwner = async (text) => {
    for (const host of NUMBERS_HOSTS) {
      await bot.sendMessage(host, { text: `${BOT_EMOJI} ${text}` });
    }
  };

  const sendReply = async (text) =>
    await bot.sendMessage(
      remoteJid,
      { text: `${text}` },
      { quoted: baileysMessage }
    );

  const sendReplyWithMentions = async (text, mentions) =>
  await bot.sendMessage(
    remoteJid,
    { text: `${BOT_EMOJI} ${text}`, mentions },
    { quoted: baileysMessage }
  );

  const sendReplyOwner = async (text) => {
    for (let host of NUMBERS_HOSTS) {
      await bot.sendMessage(
        host,
        { text: `${text}` },
        { quoted: baileysMessage }
      );
    }
  };

  const sendReact = async (emoji) =>
    await bot.sendMessage(remoteJid, {
      react: {
        text: emoji,
        key: baileysMessage.key,
      },
    });

  const sendSuccessReact = async () => await sendReact("✅");
  const sendWaitReact = async () => await sendReact("⏳");
  const sendWarningReact = async () => await sendReact("⚠️");
  const sendErrorReact = async () => await sendReact("❌");

  const sendSuccessReply = async (text,choice) => {
    switch (choice) {
      case 1:
      case 'verde':
        await sendSuccessReact();
        return await sendReply(`✅ ${text}`);
      default:
        await sendSuccessReact();
        return await sendReply(`${text}`);
    }
  };

  const sendMentionReply = async (text, mentions) => {
    await sendSuccessReact();
    return await sendReplyWithMentions(`${text}`, mentions);
  };

  const sendWaitReply = async (text) => {
    await sendWaitReact();
    return await sendReply(`⏳ Aguarde! ${text || waitMessage}`);
  };

  const sendWarningReply = async (text) => {
    await sendWarningReact();
    return await sendReply(`⚠️ Atenção! ${text}`);
  };

  const sendErrorReply = async (text) => {
    await sendErrorReact();
    return await sendReply(`❌ Erro! ${text}`);
  };

  const sendLogOwner = async (text) => {
    return await sendReplyOwner(`💻 Notificação! ${text}`);
  };

  const sendStickerFromFile = async (file) =>
    await bot.sendMessage(remoteJid, {
      sticker: { url: file },
    });

  const sendImageFromFile = async (file) =>
    await bot.sendMessage(remoteJid, {
      image: { url: file },
    });

  const sendImageWithText = async (file, text) => {
    await bot.sendMessage(remoteJid, {
      image: { url: file },
      caption: text
    });
    };
    
  return {
    bot,
    remoteJid,
    prefix,
    commandName,
    args,
    isImage,
    isVideo,
    isSticker,
    idMessage,
    participant,
    fromMe,
    isGroup,
    nickName,
    user,
    baileysMessage,
    isAdminGroup,
    sendReplyWithMentions,
    sendMentionReply,
    sendText,
    sendLogOwner,
    sendTextOwner,
    sendReplyOwner,
    sendReply,
    sendStickerFromFile,
    sendImageFromFile,
    sendImageWithText,
    sendReact,
    sendSuccessReact,
    sendWaitReact,
    sendWarningReact,
    sendErrorReply,
    sendSuccessReply,
    sendWaitReply,
    sendWarningReply,
    sendErrorReact,
    downloadImage,
    downloadSticker,
    downloadVideo,
  };
};
