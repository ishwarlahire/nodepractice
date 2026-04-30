import Fastify from "fastify";
import Dotenv from "dotenv";
Dotenv.config();
const app = Fastify({ logger: true });

import sequelize from "./config/db";
import "./models/user.model";
import "./models/userProfile.model";
import "./models/project.model";
import "./models/projectstatus.model";
import "./models/task.model";
import "./models/taskstatus.model";
import "./models/associations";

import userRoutes from "./routes/user.route";
import projectRoutes from "./routes/project.route";
import projectStatus from "./routes/projectstatus.route";
// import taskRoutes from "./routes/task.routes";


app.register(userRoutes);
app.register(projectRoutes);
app.register(projectStatus);
// app.register(taskRoutes);
const start = async () => {
    await sequelize.sync({ alter: true });
    await app.listen({
        port: Number(process.env.PORT),
        host: process.env.HOST
    });

    console.log("Server Started");
};

start();
