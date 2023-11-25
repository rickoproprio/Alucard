const { PREFIX } = require("../../config");

module.exports = {
  name: "notas",
  description: "exibe as atualizações",
  commands: ["notas"],
  usage: `${PREFIX}comando`,
  handle: async ({ sendSuccessReply }) => {
    await sendSuccessReply(`Notas de Atualização *Alucard-Bot v1.10:* 08/08/23

• Adição de um novo comando para visualizar as mudanças recentes: (/notas).

• Renomeação do bot para "Alucard". Agora você pode interagir comigo usando /alucard ou simplesmente /<pergunta>.

• Remoção dos comandos /sticker e /toimage. Esses comandos foram retirados para focar na facilidade de acesso à informação. Figurinhas podem ser adquiridas facilmente com outros bots, e esses comandos consumiam muita memória cache e RAM. A memória cache será usada para acelerar o bot.

• Introdução de APIs próprias, ampliando as opções de consultas disponíveis. No futuro, essas APIs poderão ser comercializadas.

• Com a adoção das APIs próprias, o bot será menos dependente de recursos externos, resultando em otimizações. Entretanto, como estamos em fase de testes, podem ocorrer falhas. Não se preocupe, todas as falhas são registradas em logs e encaminhadas para os desenvolvedores.

• Solicitação para evitar o spam de comandos, pois isso pode resultar no bloqueio do bot. Lembrando que estamos em fase de testes.

• Estamos trabalhando em um site de fornecimento de APIs e, por enquanto, não estamos dedicando tanto tempo ao desenvolvimento do bot. No entanto, após a conclusão, a meta é migrar a linguagem do bot de JavaScript para TypeScript, proporcionando maior responsividade e rapidez.

• Módulos aprimorados e adicionados: CPF1, CPF2, CPF3, CPF4, Nome1, Placa1, Placa2, Tel1, Tel2, Tel3, CNPJ1, CNS1 e Números BIN. Agora você pode consultar informações relacionadas a esses diferentes tipos de dados diretamente com o bot.
    
• Agradecemos pela sua compreensão durante o período offline do Alucard-Bot. Estamos ansiosos para continuar aprimorando sua experiência com nossas atualizações e recursos aprimorados. Sua confiança é fundamental para nós.`);
  },
};
