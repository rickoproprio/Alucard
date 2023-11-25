const { BOT_NAME } = require("../config");
const axios = require("axios");
const { InvalidParameterError } = require("../errors/InvalidParameterError");
const { WarningError } = require("../errors/WarningError");
const { getValidResponse } = require("../utils");

exports.placa1 = async (args, CommandName, nickName) => {
  if (!args[0]) {
    throw new InvalidParameterError( 
      "Placa inválida. Por favor, forneça uma placa no formato AAA0X00 ou AAA9999."
    );
  }

  const placa = args[0].replace(/[\s-]/g, '').replace(/[^\w]/g, '');

  if (!placa || ![7, 8].includes(placa.length)) {
    throw new InvalidParameterError(
      "Placa inválida. Por favor, forneça uma placa no formato AAA0X00 ou AAA9999."
    );
  }

  try {
    const response = await axios.get(
      `` //api de placa aqui.
    );
    const data = response.data;

    if (data === null) {
      throw new WarningError("Placa não encontrada na base de dados!");
    }

    return `『 ⎋ *PLACA SIMPLES* ⎋ 』(DETRAN)
      
🚘 *Informações do Veículo*
• *Marca*: ${data?.MARCA}
• *Modelo*: ${data?.MODELO}
• *Submodelo*: ${data?.SUBMODELO}
• *Versão*: ${data?.VERSAO}
• *Ano*: ${data?.ano}
• *Ano do Modelo*: ${data?.anoModelo}
• *Chassi*: ${data?.extra?.chassi}
• *Código de Retorno*: ${data?.codigoRetorno}
• *Código de Situação*: ${data?.codigoSituacao}
• *Cor*: ${data?.extra?.cor_veiculo?.cor}
• *Data*: ${data?.data}
• *Data de Atualização do Alarme*: ${data?.dataAtualizacaoAlarme}
• *Data de Atualização das Características do Veículo*: ${data?.dataAtualizacaoCaracteristicasVeiculo}
• *Data de Atualização de Roubo/Furto*: ${data?.dataAtualizacaoRouboFurto}
• *Ano de Fabricação*: ${data?.extra?.ano_fabricacao}
• *Ano do Modelo*: ${data?.extra?.ano_modelo}
• *Caixa de Câmbio*: ${data?.extra?.caixa_cambio}
• *Capacidade Máxima de Tração*: ${data?.extra?.cap_maxima_tracao}
• *Capacidade de Carga*: ${data?.extra?.capacidade_carga}
• *Carroceria*: ${data?.extra?.carroceria}
• *Cilindradas*: ${data?.extra?.cilindradas}
• *Combustível*: ${data?.extra?.combustivel?.combustivel}
• *Data de Atualização*: ${data?.extra?.data_atualiacao}
• *DI*: ${data?.extra?.di}
• *Eixo Traseiro Diferencial*: ${data?.extra?.eixo_traseiro_dif}
• *Eixos*: ${data?.extra?.eixos}
• *Espécie do Veículo*: ${data?.extra?.especie_veiculo}
• *Faturado*: ${data?.extra?.faturado}
• *ID*: ${data?.extra?.id}
• *Identificador da Importadora*: ${data?.extra?.ident_importadora}
• *Limite de Restrição Tributária*: ${data?.extra?.limite_restricao_trib}
• *Linha*: ${data?.extra?.linha}
      
🚗 *Marca/Modelo*
• *Grupo*: ${data?.extra?.marca_modelo?.grupo}
• *Marca*: ${data?.extra?.marca_modelo?.marca}
• *Modelo*: ${data?.extra?.marca_modelo?.modelo}
• *Segmento*: ${data?.extra?.marca_modelo?.segmento}
• *Subsegmento*: ${data?.extra?.marca_modelo?.sub_segmento}
• *Versão*: ${data?.extra?.marca_modelo?.version}
            
📍 *Localização*
• *Município*: ${data?.extra?.municipio?.municipio}, ${data?.extra?.municipio?.uf}
            
📋 *Outras Informações*
• *Motor*: ${data?.extra?.motor}
• *Nacionalidade*: ${data?.extra?.nacionalidade?.nacionalidade}
• *Peso Bruto Total*: ${data?.extra?.peso_bruto_total}
• *Placa*: ${data?.extra?.placa}
• *Placa do Modelo Antigo*: ${data?.extra?.placa_modelo_antigo}
• *Placa do Modelo Novo*: ${data?.extra?.placa_modelo_novo}
• *Placa Nova*: ${data?.extra?.placa_nova}
• *Potência*: ${data?.extra?.potencia}
• *Quantidade de Passageiros*: ${data?.extra?.quantidade_passageiro}
• *Registro DI*: ${data?.extra?.registro_di}
• *Renavam*: ${data?.extra?.renavam}
• *Restrição 1*: ${data?.extra?.restricao_1?.restricao}
• *Restrição 2*: ${data?.extra?.restricao_2?.restricao}
• *Restrição 3*: ${data?.extra?.restricao_3?.restricao}
• *Restrição 4*: ${data?.extra?.restricao_4?.restricao}
      
✵ *Alucard bot* é um parceiro oficial da *NT-APIS*
┉┉┉┉┉┉┉┉┉┉┉┉
艾 By: *${BOT_NAME}*
⎇ Search by: *${nickName}*`;
  } catch (error) {
     return error;
    }
};
