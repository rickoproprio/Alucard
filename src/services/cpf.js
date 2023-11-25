const { BOT_NAME } = require("../config");
const { InvalidParameterError } = require("../errors/InvalidParameterError");
const axios = require("axios");
const { getValidResponse } = require("../utils");
const { WarningError } = require("../errors/WarningError");

exports.cpf1 = async (args, nickName) => {
  const cpf = args.join("").replace(/\D/g, "");

  if (!/^\d{11}$/.test(cpf)) {
    throw new InvalidParameterError(
      "Você precisa enviar o CPF no formato, 012.345.678-9A ou 0123456789A"
    );
  }

  try {
    const url = ""; //api de CPF
    const payload = {
      // se precisar de payloads se nao só excluir essa variavel
    };

    const response = await axios.post(url, payload); //exclui do axios tbm
    const data = response.data;

    if (!data.success) {
      return false;
    }

    return `『 ⎋ *CPF SIMPLES* ⎋ 』(CADSUS)
  
🙍‍♂ *DADOS PESSOAIS*
• *Nome*: ⎇ ${data.data.nome}
• *CPF*: ⎇ ${data.data.cpf}
• *CNS*: ⎇ ${data.data.cns}
• *Data de Nascimento*: ⎇ ${data.data.data_nascimento}
• *Sexo*: ⎇ ${data.data.sexo}
• *vivo*: ⎇ ${data.data.vivo}
  
• *Mãe*: ⎇ ${data.data.mae}
• *Pai*: ⎇ ${data.data.pai}
  
🏡 *ENDEREÇOS*
• *CEP*: ⎇ ${data.data.cep}
• *Logradouro*: ⎇ ${data.data.logradouro}
• *Número*: ⎇ ${data.data.numero}
• *Bairro*: ⎇ ${data.data.bairro}
• *Cidade*: ⎇ ${data.data.cidade_nome}
• *Estado*: ⎇ ${data.data.estado_nome}
• *País*: ⎇ ${data.data.nome_pais}
  
📞 *CONTATO*
• *Telefone*: ⎇ ${data.data.telefone}
• *Email*: ⎇ ${data.data.email}

┉┉┉┉┉┉┉┉┉┉┉┉
艾 By: *${BOT_NAME}*
⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};

exports.cpf2 = async (args, CommandName, nickName) => {
  const cpf = args.join("").replace(/\D/g, "");

  if (!/^\d{11}$/.test(cpf)) {
    throw new InvalidParameterError(
      "Você precisa enviar o CPF no formato, XXX.XXX.XXX-XX ou XXXXXXXXXXX"
    );
  }

  const urls = [
    ``, //url da api de CPF2
  ];

  try {
    const response = await getValidResponse(urls); //getValidResponse é uma função criada pra gente analisar a API, as vezes não tinhamos certezada da qualidade da mesma

    if (!response || !response.data.resultado) return false;
  
    const strValue = response.data.resultado;
  
    return `『 ⎋ *CPF COMPLETA* ⎋ 』\n\n${strValue}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};

exports.cpf3 = async (args, CommandName, nickName) => {
  const cpf = args.join("").replace(/\D/g, "");

  if (!/^\d{11}$/.test(cpf)) {
    throw new InvalidParameterError(
      "Você precisa enviar o CPF no formato, XXX.XXX.XXX-XX ou XXXXXXXXXXX"
    );
  }

  const urls = [
    ``,
  ];

  try {
    const response = await getValidResponse(urls);

    if (!response || !response.data.resultado) return false;
  
    const strValue = response.data.resultado;
  
    return `『 ⎋ *CPF COMPLETA* ⎋ 』(CADSUS)\n\n${strValue}\n┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};


exports.score = async (args, nickName) => {
  const cpf = args.join("").replace(/\D/g, "");

  if (!/^\d{11}$/.test(cpf)) {
    throw new InvalidParameterError(
      "Você precisa enviar o CPF no formato, XXX.XXX.XXX-XX ou XXXXXXXXXXX"
    );
  }

  const url = ``;

  try {
    const response = await axios.get(url);
    const data = response.data;
  
    if (!data || !data.status || !data.dados) {
      return false;
    }

    return `『 ⎋ *CONSULTA DE SCORE* ⎋ 』

*SCORE V3 SPC MOSAIC*

• *SCORE_SPC ATUAL*: ⎇ ${data.dados.scoreSPC_Atual}
• *SCORE_CSB9*: ⎇ ${data.dados.scoreCSB9}
• *SCORE_CSBA*: ⎇ ${data.dados.scoreCSBA}

• *ESTADO CIVIL*: ⎇ ${data.dados.estadoCivil}
• *ESCOLARIDADE*: ⎇ ${data.dados.escolaridade}
• *TRABALHO*: ⎇ ${data.dados.trabalho}

• *RENDA*: ⎇ ${data.dados.Renda}
• *FAIXA DE RENDA*: ⎇ ${data.dados.faixaDeRenda}

• *MOSAIC*: ⎇ ${data.mosaic.map(sc => "\n" + sc)}

• *SEGUNDO MOSAIC*: ⎇ ${data.mosaic2.map(sc => "\n" + sc)}

• *NOVO MOSAIC*: ⎇ ${data.mosaicNovo.map(sc => "\n" + sc)}

┉┉┉┉┉┉┉┉┉┉┉┉┉┉\n艾 By: *${BOT_NAME}*\n⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};
