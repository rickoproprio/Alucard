const { PREFIX, NUMBER_BOT } = require("../../config");

module.exports = {
  name: "Demitir",
  description: "Demitir um usuário ou mais usuários do grupo",
  commands: ["demitir", "demote", "demitido", "rebaixar"],
  usage: `${PREFIX}demitir @numero1 | @numero2`,
  handle: async ({
    args,
    bot,
    remoteJid,
    sendWarningReply,
    sendSuccessReply,
  }) => {
    if (!args[0]) {
      return await sendWarningReply(
        `Você deve usar o comando assim *${PREFIX}demitir @numero1 | @numero2*`
      );
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
        await bot.groupParticipantsUpdate(remoteJid, [element.id], "demote");
      }
    } catch (error) {
      return await sendWarningReply(
        `Não foi possível rebaixar o(s) usuário(s)!\n Você deve usar o comando assim *${PREFIX}demitir @numero1 | @numero2*`
      );
    }
    return sendSuccessReply("Usuário(s) demitidos(s) com sucesso!");
  },
};
