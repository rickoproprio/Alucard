const { InvalidParameterError } = require("../errors/InvalidParameterError");
const { BOT_NAME } = require("../config");
const axios = require("axios");

exports.cep = async (args, nickName) => {
    const cep = args[0];
  
    if (!cep || cep.length !== 8) {
      throw new InvalidParameterError(
        "CEP inválido. Por favor, forneça um CEP no formato 12345678."
      );
    }
    const urls = [`https://ws.apicep.com/cep/${cep}.json`];
  
    try {
      const response = await getValidResponse(urls);
  
      if (!response || response.status !== 200) {
        return false;
      }
  
      const resultado = response.data;
  
      const strValue = `• *CEP:* ${resultado.code}
• *LOGRADOURO:* ${resultado.address}
• *BAIRRO:* ${resultado.district}
• *UF:* ${resultado.state}
• *CIDADE:* ${resultado.city}`;
  
      return `『 ⎋ *CEP* ⎋ 』\n\n${strValue}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
    } catch (error) {
      return error;
    }
  };
  
exports.cep2 = async (args, nickName) => {
    const cep = args.join("").replace(/\D/g, "");

    if (!cep || ![8, 9].includes(cep.length)) {
        throw new InvalidParameterError(
            "Você precisa enviar um CEP no formato 00000-000 ou 00000000!"
        );
    }

    const url = ``; //coloque sua api de CEP aqui

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (!data || !data.status || !data.dados) {
            return "Não foi possível obter os dados do CEP.";
        }

        const infoCep = data.dados.map(item => `
*CPF*: ${item.CPF}
*NOME*: ${item.Nome}
*TELEFONE*: ${item.Telefone}

*MÃE*: ${item.Mae}
*PAI*: ${item.Pai}
            
_ENDEREÇO:_

*MUNICÍPIO*: ${item.Municipio}
*LOGRADOURO*: ${item.Logradouro}
*BAIRRO*: ${item.Bairro}
*NÚMERO*: ${item.Numero}
            
┉┉┉┉┉┉┉┉┉┉┉┉┉┉
        `).join("\n");

        return `『 ⎋ *CEP COMPLETA* ⎋ 』
${infoCep}
┉┉┉┉┉┉┉┉┉┉┉┉┉┉
艾 By: *${BOT_NAME}*
⎇ Search by: *${nickName}*`;
    } catch (error) {
        return "Ocorreu um erro ao consultar o CEP.";
    }
};
