const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { tel1, tel2, tel3 } = require("../../services/tel");

module.exports = {
  name: "Telefone",
  description: "Consulta de telefone",
  commands: ["tel", "tel1", "tel2", "tel3", "tel4"],
  usage: `${PREFIX}tel <numero>`,
  handle: async ({
    args,
    sendReact,
    sendReply,
    sendWarningReply,
    nickName,
    sendSuccessReply,
    sendWaitReact,
    commandName,
  }) => {
    await sendWaitReact();

    const commandNumber = commandName === "tel" ? args[0] : commandName.substring(3);
    if (!commandNumber || isNaN(parseInt(commandNumber)) || commandNumber < 1 || commandNumber > 4) {
      throw new InvalidParameterError(
        `Você precisa escolher uma rota (1, 2, 3 ou 4).
Ex: *"${PREFIX}tel1"*`
      );
    }
    
    switch (commandNumber) {
      case "1":
        const data = await tel1(args, nickName);
        if (!data) {
          return sendWarningReply("Telefone não encontrado");
        }
        await sendReact("📲")
        await sendReply(data);
        break;
      case "2":
        const data2 = await tel2(args, nickName);
        if (!data2) {
          return sendWarningReply("Telefone não encontrado");
        }
        await sendReact("📲")
        await sendReply(data2);
        break;
      case "3":
        const data3 = await tel3(args, nickName);
        if (!data3) {
          return sendWarningReply("Telefone não encontrado");
        }
        await sendReact("📲")
        await sendReply(data3);
        break;
    }
  },
};
