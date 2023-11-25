const { PREFIX, NUMBER_BOT } = require("../../config");

module.exports = {
  name: "fechar grupo",
  description: "fechar um grupo",
  commands: ["fechar", "lock", "locked"],
  usage: `${PREFIX}fechar`,
  handle: async ({ bot, remoteJid, sendSuccessReply }) => {
    await bot.groupSettingUpdate(remoteJid, "announcement");
    return sendSuccessReply("Grupo fechado com sucesso!");
  },
};
