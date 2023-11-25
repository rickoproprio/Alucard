const { PREFIX } = require("../../config");
const { cep } = require("../../services/cep");

module.exports = {
  name: "cep",
  description: "Consulta CEP",
  commands: ["cep", "cep1", "cep2"],
  usage: `${PREFIX}cep 01001-001`,
  handle: async ({
    args,
    sendWarningReply,
    sendWaitReact,
    sendSuccessReply,
    nickName,
  }) => {
    try {
      if (args.length === 0) {
        throw new Error("Você precisa digitar um CEP, tapado!");
      }

      await sendWaitReact();

      const data = await cep(args, nickName);
      if (!data) {
        throw new Error("CEP não encontrado.");
      }
      await sendSuccessReply(data);
    } catch (error) {
      console.error(error.message);
      await sendWarningReply(error.message);
    }
  },
};
