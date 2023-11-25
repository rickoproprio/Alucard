const { default: axios } = require("axios");

exports.simsimi = async (text) => {
  const simsimiUrl = `https://api.simsimi.vn/v2/simtalk`;

  const requestBody = new URLSearchParams({
    text: text,
    lc: "pt",
    cf: false,
  }).toString();

  const contentLength = Buffer.byteLength(requestBody, "utf8");

  try {
    const response = await axios.post(simsimiUrl, requestBody, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": contentLength,
      },
    });

    return response?.data?.message;
  } catch (error) {
    if (error.response && error.response.status === 411) {
      return error?.response?.data?.message;
    }
    console.log(error);
    throw new Error(error);
  }
};
