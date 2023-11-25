const { getValidResponse } = require("../utils");
const { BOT_NAME } = require("../config");
const { InvalidParameterError } = require("../errors/InvalidParameterError");

exports.bin = async (args, nickName) => {
  const bin = args[0];

  if (!bin || !/^\d{6}$/.test(bin)) {
    throw new InvalidParameterError(
      "Você precisa enviar uma bin no formato XXXXXX"
    );
  }

  const urls = [
    `https://apialucard.000webhostapp.com/bin.php?bin=${bin}`
  ];
  
  try {
    const response = await getValidResponse(urls);

    if (!response) return false;

    const data = response.data;

    if (data.code === "404") {
      return "⚠️ Atenção! Bin não encontrada.";
    }

    const resultado = `🔎 *BIN ENCONTRADA* 🔎\n\n🏦 *DADOS SIMPLES*\n\n• *BIN:* ${data.dados.bin}\n• *TIPO:* ${data.dados.tipo.trim()}\n• *NÍVEL:* ${data.dados.nivel}\n• *BANDEIRA:* ${data.dados.bandeira}\n• *BANCO:* ${data.dados.banco}\n• *PAÍS:* ${data.dados.pais}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
    return resultado;
} catch (error) {
    return error;
  }
};