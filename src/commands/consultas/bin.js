const { PREFIX } = require("../../config");
const { InvalidParameterError } = require("../../errors/InvalidParameterError");
const { WarningError } = require("../../errors/WarningError");
const { bin } = require("../../services/bin")

module.exports = {
    name: "Bin",
    description: "Consulta de BIN",
    commands: ["bin"],
    usage: `${PREFIX}bin <bin>`,
    handle: async ({
        args,
        sendSuccessReply,
        sendReact,
        sendReply,
        nickName,
        sendWaitReact,
    }) => {
        await sendWaitReact();

        const data = await bin(args, nickName)
        if (!data) {
            throw new WarningError("Bin não encontrada");
        }
        await sendReact("💳")
        await sendReply(data);
    },
};