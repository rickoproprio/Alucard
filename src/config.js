const path = require("path");
require("dotenv").config();

exports.PREFIX = "/"; //aqui você escolhe o prefixo Ex: #, &, nesse caso está /
exports.BOT_EMOJI = "🤖"; //Aqui é o emoji algumas mensagem que for definido de BOT_EMOJI é esse o Emoji
exports.BOT_NAME = "𝖆𝖑𝖚𝖈𝖆𝖗𝖉-𝖇𝖔𝖙"; //Nome do seu BOT

exports.COMMANDS_DIR = path.join(__dirname, "commands");
exports.TEMP_DIR = path.resolve(__dirname, "..", "assets", "temp");

exports.TIMEOUT_IN_MILLISECONDS_BY_EVENT = 150; //tempo que ele vai carregar os eventos em MS

exports.NUMBERS_HOSTS = ["551140028922@s.whatsapp.net"] //Números dos donos para comandos da pasta Owner, pode ter 1 ou mais donos

exports.NUMBER_BOT = "551140028922@s.whatsapp.net" //Números do BOT nunca esquecer do @s.whatsapp.net só 1 numero

exports.TIMEOUT_IN_MILLISECONDS_BY_SPAM = 15000; //tempo que o usario pode mandar mensagem nesse caso 2 msg a cada 15 segundos, depois disso é ignorado.

exports.OPENAI_API_KEY = "token-openai"; //caso queira usar chat-gpt no bot
