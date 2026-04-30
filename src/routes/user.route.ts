import { FastifyInstance } from "fastify";
import * as controller from "../controllers/user.controller";

async function userRoutes(app: FastifyInstance) {
    app.post("/user", controller.createUser),
        app.get("/users/:id",controller.getUserById),
        app.put("/user/:id", controller.updateUser),
        app.delete("/user/:id", controller.deleteUser),
        app.post("/users/list", controller.getUsers)
}

export default userRoutes;