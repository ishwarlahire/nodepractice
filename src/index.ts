import Fastify from "fastify";
import Dotenv from "dotenv";
Dotenv.config();
import sequelize from "./connections/db";
import userRoutes from "./routes/user.route";
import "./models/user.model";
import "./models/userProfile.model";
import "./models/project.model";
import "./models/projectstatus.model";
import "./models/task.model";
import "./models/taskstatus.model";
import "./models/associations";

const app = Fastify({ logger: true });
app.register(userRoutes);
const start = async () => {

    await sequelize.sync({ alter: true });

    await app.listen({
        port: Number(process.env.PORT),
        host: process.env.HOST
    });

    console.log("Server Started");
};

start();
