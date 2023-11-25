const { connect } = require("./connection");
const { load } = require("./loader");

async function start() {
  const bot = await connect();
  console.clear();
  console.log("🤖 Bot Conectado!\n");
  load(bot);
  console.log("💻 Eventos Carregados!\n");
}

start();

//feito com carinho e mt conhecimento by biel e rick