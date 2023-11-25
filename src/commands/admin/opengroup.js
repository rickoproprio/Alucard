const { PREFIX, NUMBER_BOT } = require("../../config");

module.exports = {
  name: "Abrir grupo",
  description: "Abrir o grupo",
  commands: ["abrir", "open", "opened"],
  usage: `${PREFIX}abrir`,
  handle: async ({ bot, remoteJid, sendSuccessReply }) => {
    await bot.groupSettingUpdate(remoteJid, "not_announcement");
    return sendSuccessReply("Grupo aberto com sucesso!");
  },
};
