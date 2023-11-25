exports.onGroupParticipantsUpdate = async ({ bot, groupUpdate }) => {
  const { id, action, participants } = groupUpdate;
  const { add, remove } = action;

//   if (add) {
    
//     const message = {
//       text: `Bem vindo ao grupo @${id.split("@")[0]}!`,
//       mentions: participants.map((participant) => {
//         return {
//           tag: "@",
//           userId: participant.split("@")[0],
//         };
//       }),
//     };

//     await bot.sendMessage(id, message);
//   } else if (remove) {
//     const message = {
//       text: `Tchau @${id.split("@")[0]}!`,
//       mentions: participants.map((participant) => {
//         return {
//           tag: "@",
//           userId: participant.split("@")[0],
//         };
//       }),
//     };

//     await bot.sendMessage(id, message);
//   }
};
