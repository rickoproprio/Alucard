const fs = require("fs");
const path = require("path");

exports.logCreate = (erro) => {
  const dataAtual = new Date().toISOString().split("T")[0];
  const nomeArquivo = `${dataAtual}_${erro.message.replace(/\s/g, "_")}.log`;
  const caminhoPastaLogs = path.join(__dirname, "..", "logs");
  const caminhoArquivo = path.join(caminhoPastaLogs, nomeArquivo);
  const mensagem = `[${new Date().toISOString()}] Ocorreu um erro: ${erro.stack}\n`;

  if (!fs.existsSync(caminhoPastaLogs)) {
    fs.mkdirSync(caminhoPastaLogs, { recursive: true });
  }

  fs.appendFile(caminhoArquivo, mensagem, (err) => {
    if (err) {
      console.error("Erro ao criar o log de erro:", err);
    }
  });
};
