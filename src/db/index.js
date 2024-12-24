import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config({
  path: "./.env",
});

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    // host: cred.DB_HOST,
    // host:'127.0.0.1',
    // port:3306,
    dialect: "mysql",
    // dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
