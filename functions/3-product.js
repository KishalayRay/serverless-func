const Airtable = require("airtable-node");
require("dotenv").config();
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appb9ePraNr2lhjGP")
  .table("products");

exports.handler = async (event, context, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id  ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (e) {
        return {
            statusCode: 500,
            body: `Server Error`,
          };
    }
  }
  return {
    statusCode: 400,
    body: "Please provode Product ID",
  };
};
