const { PREFIX } = require("../../config");
const { WarningError } = require("../../errors/WarningError");

module.exports = {
  name: "Logger",
  description: "Mostrar os logs efetuados pelo bot",
  commands: ["logger", "logs", "log"],
  usage: `${PREFIX}logger <args>`,
  handle: async ({
    bot,
    args,
    remoteJid,
    sendSuccessReply,
    sendWarningReply,
  }) => {
    switch (args[0]) {
      case "grupo":
      case "grupos":
      case "group":
        try {
          const metadata = await bot.groupMetadata(remoteJid);
          for (const i of metadata.participants) {
            console.log(i.id);
            return i.id;
          }
          await sendSuccessReply(
            `Grupo: ${metadata?.subject}\nDescrição: ${metadata?.desc}\nCriado por: ${metadata?.owner}\nMembros: ${metadata.participants.id}\nRemoteJid: ${remoteJid}`
          );
        } catch (error) {
          throw new WarningError(
            `Não foi possível obter os dados do grupo!\n Você deve usar o comando assim ${this.usage}`
          );
        }
        break;
      default:
        return await sendWarningReply(this.usage);
    }
  },
};
