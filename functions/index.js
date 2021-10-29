require("dotenv").config();
const instagramToken = process.env.INSTAGRAM_ACCESS_TOKEN

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(instagramToken),
  };
};