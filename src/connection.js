const {
  default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
} = require("@whiskeysockets/baileys");

const pino = require("pino");

exports.connect = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(
    "./assets/auth/baileys"
  );

  const bot = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    defaultQueryTimeoutMs: undefined,
    logger: pino({ level: "silent" }),
  });

  bot.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === "close") {
      const shouldReconnect =
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;

      if (shouldReconnect) {
        this.connect();
      }
    }
  });

  bot.ev.on("creds.update", saveCreds);

  return bot;
};
