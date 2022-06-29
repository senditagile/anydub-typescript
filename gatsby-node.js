import debug from "debug";
const { useGatsbyNode } = require("gatsby-plugin-ts-config");

require("dotenv").config({
  path: `.env`
});

debug('log me');

module.exports = useGatsbyNode(() => require("./config/gatsby-node"), {});
