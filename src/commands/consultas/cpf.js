const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { cpf1, cpf2, cpf3 } = require("../../services/cpf");
const { cpfblock } =  require("../../services/block")

module.exports = {
  name: "cpf",
  description: "Consulta de CPF simples!",
  commands: ["cpf", "cpf1", "cpf2", "cpf3", "cpf4", "cpf5"],
  usage: `${PREFIX}cpf1 <CPF>`,
  handle: async ({
    args,
    sendReact,
    sendReply,
    sendWarningReply,
    sendSuccessReply,
    commandName,
    nickName,
    sendWaitReact,
  }) => {
    await sendWaitReact();

    const commandNumber = commandName === "cpf" ? args[0] : commandName.substring(3);
    if (!commandNumber || isNaN(parseInt(commandNumber)) || commandNumber < 1 || commandNumber > 3) {
      throw new InvalidParameterError(
        `Você precisa escolher uma rota(1, 2, 3, 4 ou 5)
Ex: *"${PREFIX}cpf1"*`
      );
    } 

    const cpf = args.join("").replace(/\D/g, "");
    if (cpfblock.includes(cpf)) {
      return sendWarningReply("Este CPF foi bloqueado pelo desenvolvedor e não pode ser consultado.");
    }

    switch (commandName) {
      case "cpf1":
        const data = await cpf1(args, nickName);
        if (!data) {
          return sendWarningReply("CPF não encontrado!");
        }
        await sendReact("👤")
        await sendReply(data);
        break;
      case "cpf2":
        const data2 = await cpf2(args, nickName);
        if (!data2) {
          return sendWarningReply("CPF não encontrado!");
        }
        await sendReact("👤")
        await sendReply(data2);
        break;
      case "cpf3":
        const data3 = await cpf3(args, nickName);
        if (!data3) {
          return sendWarningReply("CPF não encontrado!");
        }
        await sendReact("👤")
        await sendReply(data3);
        break;
    }
  },
};

    //man já parou pra pensar que
    //pra que tantos codigos??
    //se a vida
    //não é programada
    //e as melhores coisas
    //não tem lógica