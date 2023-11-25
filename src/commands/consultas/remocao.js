const fs = require('fs');
const path = require('path');
const { PREFIX } = require("../../config");
const blockFilePath = path.join(__dirname, "../../services/block.js");
const { cpfblock } = require("../../services/block");

module.exports = {
  name: "remocao",
  description: "Comando adicionar CPF à lista de bloqueados",
  commands: ["remocao"],
  usage: `${PREFIX}remocao <CPF>`,
  handle: async ({ args, sendSuccessReply, sendWarningReply }) => {
    const cpfToAdd = args.join("").replace(/\D/g, "");

    if (!cpfToAdd || cpfToAdd.length !== 11) {
      return sendWarningReply("CPF inválido. Forneça um CPF valido de 11 dígitos, ex: 0123456789A ou 012.345.678-9A");
    }

    if (cpfblock.includes(cpfToAdd)) {
      return sendWarningReply("O CPF já consta no banco de dados, não é preciso adiciona-lo 2x!");
    }

    
    cpfblock.push(cpfToAdd);
    

    fs.writeFileSync(blockFilePath, `module.exports = { cpfblock: ${JSON.stringify(cpfblock)} };`);

    return sendSuccessReply(`O CPF *${cpfToAdd}* foi removido com sucesso e não será mais consultado!`);
  },
};
