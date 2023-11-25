const { PREFIX } = require("../../config");
const { WarningError } = require("../../errors/WarningError");

module.exports = {
  name: "calvo",
  description: "Mostra a % de calvice de uma pessoa",
  commands: ["calvo"],
  usage: `${PREFIX}calvo`,
  handle: async ({
    sendMentionReply,
    args,
    bot,
    remoteJid,
  }) => {
    const calvicePercent = Math.floor(Math.random() * 101);

    try {
      if (!args[0]) {
        const message = {
          text: `Você é ${calvicePercent}% calvo!`,
          mentions: [],
        };

        await sendMentionReply(message.text, message.mentions);
      } else {
        const mentionedUserId = args[0].split("@")[0];
        const message = {
          text: `O ${args.join(" ")} é ${calvicePercent}% calvo!`,
          mentions: [{ tag: "", userId: mentionedUserId }],
        };
        await sendMentionReply(message.text, message.mentions);
      }
    } catch (error) {
      throw new WarningError('Não foi possível obter a % de calvice!');
    }
  },
};
