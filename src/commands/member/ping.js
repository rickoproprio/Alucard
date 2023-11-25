const { PREFIX } = require("../../config");

module.exports = {
  name: "ping",
  description: "Verificar se o bot está online",
  commands: ["ping"],
  usage: `${PREFIX}ping`,
  handle: async ({ sendReply, sendReact }) => {
    const start = Date.now(); // Captura o tempo inicial

    await sendReact("🏓");

    const end = Date.now(); // Captura o tempo final
    const latency = end - start; // Calcula a diferença de tempo em milissegundos

    if (latency > 0) {
      await sendReply(`🏓 Pong!\nTempo de resposta: ${latency}ms`);
    } else {
      await sendReply(`🏓 Pong!\nTempo de resposta indisponível.`);
    }
  },
};
