const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { nome1, nome2 } = require("../../services/nome");

module.exports = {
  name: "nome",
  description: "Consulta de nome",
  commands: ["nome", "nome1", "nome2"],
  usage: `${PREFIX}nome1 <nome da pessoa>`,
  handle: async ({
    args,
    sendWaitReact,
    sendSuccessReply,
    sendWarningReply,
    nickName,
    commandName,
  }) => {
    await sendWaitReact();

    const commandNumber = commandName === "nome" ? args[0] : commandName.substring(4);
    if (!commandNumber || isNaN(parseInt(commandNumber)) || commandNumber < 1 || commandNumber > 2) {
      return sendWarningReply(
        `Você precisa escolher uma rota (1).
Ex: *"${PREFIX}nome1"*`
      );
    }

    if (commandName === "nome1" || commandName === "nome2") {
      if (!args[0]) {
        return sendWarningReply(`Você precisa digitar um nome "${PREFIX}${commandName}".`);
      }
    }

    switch (commandName) {
      case "nome1":
        const data = await nome1(args, commandName, nickName); 
        if (!data) {
          return sendWarningReply("Nome não encontrado");
        }
        await sendSuccessReply(data);
        break;
      case "nome2":
        const data2 = await nome2(args, commandName, nickName); 
        if (!data2) {
          return sendWarningReply("Nome não encontrado");
        }
        await sendSuccessReply(data2);
        break;
      default:
        const dataDefault = await nome1(args, commandName, nickName); 
        if (!dataDefault) {
          return sendWarningReply("Nome não encontrado");
        }
        await sendSuccessReply(dataDefault);
        break;
    }
  },
};
