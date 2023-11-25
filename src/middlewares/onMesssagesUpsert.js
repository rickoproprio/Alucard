const { extractDataFromMessage } = require("../utils");
const { dynamicCommand } = require("../utils/dynamicCommand");
const { loadCommomFunctions } = require("../utils/loadCommomFunctions");
const { verifyPrefix } = require("./verifyPrefix");

exports.onMessagesUpsert = async ({ bot, messages }) => {
  const baileysMessage = messages[0];
  await bot.readMessages([baileysMessage.key]);

  const { prefix } = extractDataFromMessage(baileysMessage);
  if (!verifyPrefix(prefix)) return;

  const commonFunctions = loadCommomFunctions({ bot, baileysMessage });

  await dynamicCommand(commonFunctions);
};
