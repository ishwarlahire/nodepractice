import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DBNAME!,
  process.env.DBUSERNAME!,
  process.env.DBPASSWORD!,
  {
    host: process.env.DBHOST,
    dialect: "mysql",
    port: Number(process.env.DBPORT || 3306),
    logging: false
  }
);

export default sequelize;