const { PREFIX } = require("../../config");
const { menuMessage } = require("../../utils/messages");

module.exports = {
  name: "menu",
  description: "Menu de comandos",
  commands: ["menu", "help", "cmdpxd"],
  usage: `${PREFIX}menu`,
  handle: async ({ sendReact, sendImageWithText, sendReply }) => {
    const imageFile = "assets/image/menu.png";

    try {
      await sendReact("✅");
      await sendImageWithText(imageFile, menuMessage);
      await sendReply(`Entrem no canal de *Update do Alucard*.
Lá ocorrerá sorteios de contas premiums, e vocês vão ficar sabendo das últimas atualizações do bot.

https://chat.whatsapp.com/KXJzOE37McRA0XqD0N7UtL`)
    } catch (error) {
      console.error(error);
      await sendReply("Houve um erro");
    }
  },
};
