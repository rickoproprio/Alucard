const { BOT_NAME } = require("../config");
const { InvalidParameterError } = require("../errors/InvalidParameterError");
const { WarningError } = require("../errors/WarningError");
const { getValidResponse } = require("../utils");

exports.cnpj1 = async (args, nickName) => {
  try {
    const cnpj = args.join("").replace(/\D/g, "");

    if (!cnpj || ![14, 18].includes(cnpj.length)) {
      throw new InvalidParameterError(
        "Você precisa enviar um CNPJ no formato 0123456789ABCD!"
      );
    }

    const urls = [`https://www.receitaws.com.br/v1/cnpj/${cnpj}`];
    const response = await getValidResponse(urls);
    const data = response.data;

    if (!data || data.situacao !== "ATIVA") {
      throw new WarningError("O CNPJ informado não está ativo!");
    }

    let atividadesSecundariasText = "";
    if (data.atividades_secundarias && Array.isArray(data.atividades_secundarias)) {
      for (const atividade of data.atividades_secundarias) {
        atividadesSecundariasText += `${atividade.text}\n\n`;
      }
    }

    return `『 ⎋ *CNPJ SIMPLES* ⎋ 』(RECEITA)
    
🏢 *DADOS DO CNPJ*
• *Capital inicial*: ${data.capital_social || ""}
• *Situação*: ${data.situacao || ""}
• *Nome*: ${data.nome || ""}
• *Abertura*: ${data.abertura || ""}
• *Natureza Jurídica*: ${data.natureza_juridica || ""}
• *Porte*: ${data.porte || ""}
• *Tipo*: ${data.tipo || ""}
• *Data da Situação*: ${data.data_situacao || ""}
    
👷 *QSA*
• *Nome*: ${data.qsa && data.qsa.length > 0 ? data.qsa[0].nome || "" : ""}
• *Qualificação*: ${data.qsa && data.qsa.length > 0 ? data.qsa[0].qual || "" : ""}
    
🏴 *ENDEREÇO*
• *UF*: ${data.uf || ""}
• *Município*: ${data.municipio || ""}
• *CEP*: ${data.cep || ""}
• *Bairro*: ${data.bairro || ""}
• *Logradouro*: ${data.logradouro || ""}
• *Número*: ${data.numero || ""}
    
📞 *CONTATOS*
• *Telefone*: ${data.telefone || ""}
• *E-mail*: ${data.email || ""}
    
⚜ *ATIVIDADES PRINCIPAL*
${data.atividade_principal && data.atividade_principal[0]
    ? data.atividade_principal[0].text || ""
    : ""}
    
⚜ *ATIVIDADES SECUNDÁRIAS*
${atividadesSecundariasText}🔄 *ÚLTIMA ATUALIZAÇÃO*
${data.ultima_atualizacao || ""}

┉┉┉┉┉┉┉┉┉┉┉┉
艾 By: *${BOT_NAME}*
⎇ Search by: *${nickName}*`;
  } catch (error) {
    return error;
  }
};
