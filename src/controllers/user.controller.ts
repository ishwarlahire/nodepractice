import { FastifyRequest, FastifyReply } from "fastify";
import * as service from "../services/user.service";

export const createUser = async (request: FastifyRequest, replay: FastifyReply) => {
    const data = request.body as any;
    const isExist = await service.isEmailExist(data.email);
    if (isExist) {
        return { message: "Email already exists" };
    }

    const result = await service.createUser(data);
    replay.send(result);
};

export const getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
    const body = request.body as any;
    const result = await service.getUsers(body);

    reply.status(200).send({
      success: true,
      message: "Users fetched successfully",
      data: result.data,
      total: result.total,
      page: result.page,
      limit: result.limit
    });
};

export const getUserById = async (request: FastifyRequest<{ Params: { id: string } }>,reply: FastifyReply) => {
  const result = await service.getUserById(request.params.id);
  reply.send(result);
};

export const updateUser = async (request: FastifyRequest, replay: FastifyReply) => {
    const { id } = request.params as any;
    const data = request.body;
    const result = await service.updateUser(id, data);

    replay.send(result);
}

export const deleteUser = async (request: FastifyRequest, replay: FastifyReply) => {
    const { id } = request.params as any;
    const result = await service.deleteUser(id);

    replay.send(result)
}
