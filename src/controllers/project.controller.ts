import { FastifyRequest, FastifyReply } from "fastify";
import * as service from "../services/project.service";

export const createProject = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.createProject(req.body);

    return reply.status(201).send({
      success: true,
      message: "Project created successfully",
      data: result
    });
  } catch (error: any) {
    return reply.status(500).send({ success: false, message: error.message });
  }
};

export const getProjects = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.getProjects();

    return reply.send({
      success: true,
      data: result
    });
  } catch (error: any) {
    return reply.status(500).send({ success: false, message: error.message });
  }
};

export const getProjectById = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.params as { id: string };

    const result = await service.getProjectById(id);

    return reply.send({
      success: true,
      data: result
    });
  } catch (error: any) {
    return reply.status(404).send({ success: false, message: error.message });
  }
};

export const updateProject = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.params as { id: string };

    const result = await service.updateProject(id, req.body);

    return reply.send({
      success: true,
      message: result.message
    });
  } catch (error: any) {
    return reply.status(500).send({ success: false, message: error.message });
  }
};

export const deleteProject = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = req.params as { id: string };

    const result = await service.deleteProject(id);

    return reply.send({
      success: true,
      message: result.message
    });
  } catch (error: any) {
    return reply.status(500).send({ success: false, message: error.message });
  }
};