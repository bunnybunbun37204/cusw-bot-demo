const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "127.0.0.1",
    port: process.env.MYSQL_DOCKER_PORT,
    dialect: "mysql",
  }
);

module.exports = sequelize;
