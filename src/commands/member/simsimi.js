const { PREFIX, BOT_NAME } = require("../../config");
const { simsimi } = require("../../services/simsimi");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");

module.exports = {
  name: "bot",
  description: "conversa com o bot",
  commands: ["bot", "simsimi"],
  usage: `${PREFIX}bot`,
  handle: async ({ sendSuccessReply, sendWaitReact, args }) => {
    await sendWaitReact();

    if (!args[0]) {
      throw new InvalidParameterError(
        "Você precisa digitar algo seu tapado!"
      );
    }

    const cleanedText = args[0].replace(/[^a-zA-Z0-9\s]/g, '');
    
    if (!cleanedText) {
      throw new InvalidParameterError(
        "Você precisa enviar uma mensagem com alfanumericos, caracteres especiais são ignorados"
      );
    }

    const encodedText = encodeURIComponent(cleanedText);

    const responseText = await simsimi(encodedText);

    await sendSuccessReply(responseText);
  },
};
