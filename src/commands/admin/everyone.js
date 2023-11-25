const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { WarningError } = require("../../errors/WarningError");

module.exports = {
  name: "Everyone",
  description: "Marca todo mundo do grupo",
  commands: ["everyone", "tagall", "marcar", "all", "tag"],
  usage: `${PREFIX}everyone`,
  handle: async ({
    sendWaitReact,
    sendMentionReply,
    args,
    bot,
    remoteJid,
  }) => {
    await sendWaitReact();
    try {
      const groupMetadata = await bot.groupMetadata(remoteJid);
      const mentions = groupMetadata.participants.map((participant) => {
        return {
          tag: "@",
          userId: participant.id.split("@")[0],
        };
      });

      if (!args[0]) {
        const message = {
          text: "Marcando todos os cornos(as)",
          mentions: mentions.map((m) => `${m.userId}@s.whatsapp.net`),
        };

        await sendMentionReply(message.text, message.mentions);
      } else if (args[0]) {
        const message = {
          text: args.join(" "),
          mentions: mentions.map((m) => `${m.userId}@s.whatsapp.net`),
        };
        await sendMentionReply(message.text, message.mentions);
      }
    } catch (error) {
      throw new WarningError('Não foi possível marcar todos os usuários!')
    }
  },
};
