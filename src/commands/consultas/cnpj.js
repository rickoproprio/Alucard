const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { cnpj1 } = require("../../services/cnpj");

module.exports = {
  name: "cnpj",
  description: "Consulta de CNPJ simples!",
  commands: ["cnpj", "cnpj1"],
  usage: `${PREFIX}cnpj `,
  handle: async ({
    args, 
    sendReact,
    sendReply,
    sendWaitReact, 
    sendSuccessReply,
    nickName,
    sendWarningReply, 
    commandName,
  }) => {
    await sendWaitReact();

    const commandNumber = commandName === "cnpj" ? args[0] : commandName.substring(4);
    if (!commandNumber || isNaN(parseInt(commandNumber)) || commandNumber < 1 || commandNumber > 2) {
      throw new InvalidParameterError(
        `Você precisa escolher uma rota(1)
        Ex: *"${PREFIX}cnpj1"*`
      );
    }

    switch (commandName) {
      case "cnpj1":
        const data = await cnpj1(args, nickName);
        if (!data) {
          return sendWarningReply("Cnpj não encontrado");
        }
        await sendReact("🏢")
        await sendReply(data);
        break;
    }
  },
};