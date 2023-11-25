const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { placa1, placa2 } = require("../../services/placa");

module.exports = {
  name: "placa",
  description: "Consulta de placa Detran simples!",
  commands: ["placa", "placa1"],
  usage: `${PREFIX}placa AAA0X00`,
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

    const commandNumber = commandName === "placa" ? args[0] : commandName.substring(5);
    if (!commandNumber || isNaN(parseInt(commandNumber)) || commandNumber < 1 || commandNumber > 2) {
      throw new InvalidParameterError(
        `Você precisa escolher uma rota (1).
Ex: *"${PREFIX}placa1"*`
      );
    }

    switch (commandName) {
      case "placa1":
        const data = await placa1(args, nickName);
        if (!data){
          return sendWarningReply("Placa não encontrada!");
        }
        await sendReact("🚘")
        await sendReply(data);
        break;
      case "placa2":
        const data2 = await placa2(args, nickName);
        if (!data2){
          return sendWarningReply("Placa não encontrada!")
        }
        await sendReact("🚘")
        await sendReply(data2);
        break;
    }
  },
};