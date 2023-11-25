const { PREFIX } = require("../../config");

module.exports = {
  name: "caraoucoroa",
  description: "Jogar cara ou coroa",
  commands: ["cara", "caraoucoroa"],
  usage: `${PREFIX}caraoucoroa`,
  handle: async ({ sendReply, sendReact }) => {
    const numeroRandom = Math.floor(Math.random() * 2);
    let resultado;

    if (numeroRandom === 0) {
      resultado = "Cara";
      await sendReact("🌕");
    } else {
      resultado = "Coroa";
      await sendReact("🌑");
    }

    await sendReply(`Resultado: ${resultado}`);
  },
};
