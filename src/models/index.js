const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("social", "root", "1234", {
  host: "localhost",
  port: 3306,
  dialect:"mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});

module.exports = sequelize;
