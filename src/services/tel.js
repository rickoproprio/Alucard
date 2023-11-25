const { getValidResponse } = require("../utils");
const { BOT_NAME } = require("../config");
const axios = require("axios");
const { InvalidParameterError } = require("../errors/InvalidParameterError");

exports.tel1 = async (args, nickName) => {
  const tel = args.join("").replace(/\D/g, "");

  if (!tel || !/^\d{10,11}$/.test(tel)) {
    throw new InvalidParameterError(
      "Você precisa enviar o telefone no formato, XXXXXXXXXXX ou (XX)XXXXX-XXXX"
    );
  }

  const url = ``; //consulta de telefone

  try {
    const response = await axios.get(url);
    const data = response.data;
  
    if (!data || !data.status || !data.dados) {
      return false;
    }

    return `『 ⎋ *TEL SIMPLES* ⎋ 』

• *TELEFONE*: ⎇ ${data.dados.Telefone}
• *CPF*: ⎇ ${data.dados.CPF}
• *NOME*: ⎇ ${data.dados.Nome}

• *ENDEREÇO*:

• *LOGRADOURO*: ⎇ ${data.dados.Endereco}
• *NÚMERO*: ⎇ ${data.dados.Numero}
• *BAIRRO*: ⎇ ${data.dados.Bairro}
• *CIDADE*: ⎇ ${data.dados.Cidade}
• *UF*: ⎇ ${data.dados.UF}
• *CEP*: ⎇ ${data.dados.CEP}

┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};
exports.tel2 = async (args, commandName, nickName) => {
  const tel = args.join("").replace(/\D/g, "");

  if (!tel || !/^\d{10,11}$/.test(tel)) {
    throw new InvalidParameterError(
      "Você precisa enviar o telefone no formato, XXXXXXXXXXX ou (XX)XXXXX-XXXX"
    );
  }

  const urls = [
    ``//api de telefone2
  ];

  try {
    const response = await getValidResponse(urls);

    if (!response || !response.data.resultado) return false;
  
    const strValue = response.data.resultado;
  
    return `『 ⎋ *CONSULTA DE TELEFONE 2* ⎋ 』\n\n${strValue}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};

exports.tel3 = async (args, commandName, nickName) => {
  const tel = args.join("").replace(/\D/g, "");
  
    if (!tel || !/^\d{10,11}$/.test(tel)) {
      throw new InvalidParameterError(
        "Você precisa enviar o telefone no formato, XXXXXXXXXXX ou (XX)XXXXX-XXXX"
      );
    }
  
    const urls = [
      `` //api de telefone 3
    ];
  
    try {
      const response = await getValidResponse(urls);
  
      if (!response || !response.data.resultado) return false;
    
      const strValue = response.data.resultado;
    
      return `『 ⎋ *CONSULTA DE TELEFONE 3* ⎋ 』\n${strValue}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
    } catch (error) {
      return error;
    }
  };