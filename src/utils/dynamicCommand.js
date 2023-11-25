const { DangerError } = require("../errors/DangerError");
const { InvalidParameterError } = require("../errors/InvalidParameterError");
const { WarningError } = require("../errors/WarningError");
const { findCommandImport, verifyIfIsAdmin, VerifyIfIsOwner } = require(".");
const { verifyPrefix } = require("../middlewares/verifyPrefix");
const { hasTypeOrCommand } = require("../middlewares/hasTypeOrCommand");
const { logCreate } = require("../errors/createLog");
const { isFiltered, addFilter } = require("./antiSpam");

const existUser = new Map();

exports.dynamicCommand = async (paramsHandler) => {
  const {
    bot,
    baileysMessage,
    commandName,
    prefix,
    sendWarningReply,
    sendErrorReply,
    sendLogOwner,
    user,
  } = paramsHandler;
  const { type, command } = findCommandImport(commandName);

  if (!verifyPrefix(prefix) || !hasTypeOrCommand({ type, command })) {
    return;
  }

  const valueAdmin = await verifyIfIsAdmin(type, bot, baileysMessage);

  if (!valueAdmin) {
    return await sendWarningReply(
      "Você não tem permissão para executar este comando!"
    );
  }

  const valueOwner = await VerifyIfIsOwner(type, baileysMessage);

  if (!valueOwner) {
    return await sendWarningReply(
      "Você não tem permissão para executar este comando!"
    );
  }

  if (isFiltered(user)) return;
  
  try {
    addFilter(user);
    return await command.handle({
      ...paramsHandler,
      type,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof InvalidParameterError) {
      await sendWarningReply(`Parâmetros inválidos! ${error.message}`);
    } else if (error instanceof WarningError) {
      logCreate(error);
      await sendWarningReply(error.message);
    } else if (error instanceof DangerError) {
      logCreate(error);
      await sendErrorReply(error.message);
    } else if (error.message == "not-authorized") {
      await sendWarningReply("Eu não sou administrador do grupo!");
    } else {
      logCreate(error);
      await sendErrorReply(
        `Deu erro:( ${command.name}! Meu desenvolvedor foi avisado me arrumará o quanto antes <3\n\n📄 *Detalhes*: ${error.message}`
      );
      await sendLogOwner(
        `Deu erro no meu sistema:( ${command.name}!\n\n📄 *Detalhes*: ${error.message}`
      );
    }
  }
};
