const { BOT_NAME } = require("../config");
const { InvalidParameterError } = require("../errors/InvalidParameterError");
const { getValidResponse } = require("../utils");


function removeacentos(name) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

exports.nome1 = async (args, commandName, nickName) => {
  const nome = args[0];

  if (!nome) {
    throw new InvalidParameterError("Você precisa enviar um nome completo");
  }

  const nomenormal = removeacentos(nome);

  const urls = [``]; //coloque a api ali dentro coloque ${nomenormal} para importar o nome que ele tira os ascentos e etc.

  try {
    const response = await getValidResponse(urls);

    if (!response || !response.data.resultado) return false;
  
    const strValue = response.data.resultado;
  
    return `『 ⎋ *CONSULTA NOME 1* ⎋ 』\n\n${strValue}\n\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};

exports.nome2 = async (args, commandName, nickName) => {
  const nome = args[0];

  if (!nome) {
    throw new InvalidParameterError("Você precisa enviar um nome completo");
  }

  const nomenormal = removeacentos(nome);

  const urls = [``];

  try {
    const response = await getValidResponse(urls);

    if (!response || !response.data.resultado) return false;
  
    const strValue = response.data.resultado;
  
    return `『 ⎋ *CONSULTA NOME 2* ⎋ 』\n\n${strValue}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};

