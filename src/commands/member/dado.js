const { PREFIX } = require("../../config");

module.exports = {
  name: "dado",
  description: "rolar um dado de lados a escolha do usuario",
  commands: ["dado"],
  usage: `${PREFIX}dado <lados>`,
  handle: async ({ sendReply, sendReact, sendWarningReply, args }) => {
    let lados = 6;

    if (args.length > 0) {
      lados = parseInt(args[0]);
      
      if (isNaN(lados) || lados < 2 || lados > 999999) {
        await sendWarningReply("Especifique um número ≥ 2 com limite até 999.999");
        return;
      }
    }
    
    const numeroRandom = Math.floor(Math.random() * lados) + 1;
    await sendReact("🎲");
    await sendReply(`🎲 Caiu em: ${numeroRandom}`);
  },
};
