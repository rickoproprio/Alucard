const { PREFIX, NUMBER_BOT } = require("../../config");

module.exports = {
  name: "Banimento",
  description: "Bani um usuário ou mais usuários do grupo",
  commands: ["ban", "banir"],
  usage: `${PREFIX}ban @numero1 | @numero2`,
  handle: async ({
    args,
    bot,
    remoteJid,
    sendWarningReply,
    sendSuccessReply,
  }) => {

    if (!args[0]) {
      return await sendWarningReply(`Você deve usar o comando assim *${PREFIX}ban @numero1 | @numero2*`);
    }

    const userList = args.map((number) => {
      if (number.startsWith("@")) {
        number = number.slice(1);
      }
      return {
        id: `${number}@s.whatsapp.net`,
      };
    });

    // Verificar se o usuario está dentro do grupo

    try {
      for (const element of userList) {
        if (element.id.startsWith(NUMBER_BOT)) {
          return await sendWarningReply("Não posso me banir!");
        }
        await bot.groupParticipantsUpdate(remoteJid, [element.id], "remove");
      }
    } catch (error) {
      return await sendWarningReply(`Eu não sou administrador do grupo!`);
    }
    return sendSuccessReply("Usuário(s) banido(s) com sucesso!");
  },
};
