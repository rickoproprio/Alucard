const { TIMEOUT_IN_MILLISECONDS_BY_EVENT } = require("./config");
const {
  onGroupParticipantsUpdate,
} = require("./middlewares/onGroupParticipantsUpdate");
const { onMessagesUpsert } = require("./middlewares/onMesssagesUpsert");

exports.load = (bot) => {
  bot.ev.on("messages.upsert", async ({ messages }) => {
    setTimeout(() => {
      onMessagesUpsert({ bot, messages });
    }, TIMEOUT_IN_MILLISECONDS_BY_EVENT);
  });

  bot.ev.on("group-participants.update", async (groupUpdate) => {
    setTimeout(() => {
      onGroupParticipantsUpdate({ bot, groupUpdate });
    }, TIMEOUT_IN_MILLISECONDS_BY_EVENT);
  });
};
