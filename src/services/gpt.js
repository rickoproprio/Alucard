const axios = require("axios");
const { OPENAI_API_KEY } = require("../config");

exports.gpt = async (content) => {
  if (
    !OPENAI_API_KEY ||
    OPENAI_API_KEY === "coloque_aqui_seu_token_da_openai"
  ) {
    throw new Error(
      "Não configurou o gpt direito seu burrinho"
    );
  }

  const { data } = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    }
  );
  
  return data.choices[0].message.content;
};
