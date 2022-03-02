require("dotenv").config();
const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@localhost:5432/messenger`,
  {
    logging: false,
  },
);

module.exports = db;
