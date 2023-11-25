const { PREFIX } = require("../../config");

module.exports = {
  name: "Teste",
  description: "Comando de teste apenas para desenvolvedores",
  commands: ["teste"],
  usage: `${PREFIX}comando`,
  handle: async ({ sendSuccessReply }) => {
    await sendSuccessReply("Está funcionando corretamente!");
  },
};
