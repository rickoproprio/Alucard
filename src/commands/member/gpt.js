const { PREFIX } = require("../../config");
const { gpt } = require("../../services/gpt");

module.exports = {
  name: "gpt",
  description: "Comandos de inteligência artificial!",
  commands: ["gpt", "skybot"],
  usage: `${PREFIX}gpt com quantos paus se faz uma canoa?`,
  handle: async ({
    sendSuccessReply,
    sendWaitReply,
    sendWarningReply,
    args,
  }) => {
    if (!args[0]) {
      return sendWarningReply("Você precisa digitar algo seu tapado");
    }

    await sendWaitReply();

    const responseText = await gpt(args[0]);
    await sendSuccessReply(responseText);
  },
};
