const { TIMEOUT_IN_MILLISECONDS_BY_SPAM } = require("../config");

const userFilter = new Map();

const isFiltered = (sender) => {
  if (!userFilter.has(sender)) {
    return false;
  }

  const { count, timeoutId } = userFilter.get(sender);
  return count >= 2 && timeoutId !== null;
};
//está configurado para 2 mensagem a cada tempo definido em config em TIMEOUT_IN_MILLISECONDS_BY_SPAM, você pode alterar para 3, quantas quiser nesse intervalo de tempo só substituir 2 pela quantidade desejada.
const addFilter = (sender) => {
  if (!userFilter.has(sender)) {
    userFilter.set(sender, { count: 0, timeoutId: null });
  }

  const { count, timeoutId } = userFilter.get(sender);
  if (count < 2) {
    userFilter.set(sender, { count: count + 1, timeoutId });

    if (count === 0) {
      const newTimeoutId = setTimeout(() => {
        userFilter.set(sender, { count: 0, timeoutId: null });
        if (userFilter.get(sender).count === 0) {
          userFilter.delete(sender);
        }
      }, TIMEOUT_IN_MILLISECONDS_BY_SPAM);

      userFilter.set(sender, { count: 1, timeoutId: newTimeoutId });
    }
  }
};

module.exports = {
  isFiltered,
  addFilter,
};
