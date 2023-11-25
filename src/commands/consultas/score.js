const { PREFIX } = require("../../config");
const { WarningError } = require("../../errors/WarningError");
const { score } = require("../../services/cpf");

module.exports = {
  name: "score",
  description: "Consulta de score",
  commands: ["score"],
  usage: `${PREFIX}score`,
  handle: async ({
    args,
    sendSuccessReply,
    sendWaitReact,
    sendWarningReply,
    nickName,
    sendReply
  }) => {
    try {
      await sendWaitReact();

      const data = await score(args, nickName);
      if (!data) {
        throw new sendWarningReply("Não foi possível encontrar dados para este número");
      }
      await sendSuccessReply(data);
    } catch (error) {
      console.error("Erro durante o processamento:", error);
    }
  },
};
