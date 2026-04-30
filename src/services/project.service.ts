import Project from "../models/project.model";
import ProjectStatus from "../models/projectstatus.model";
import Task from "../models/task.model";

export const createProject = async (data: any) => {
  return await Project.create(data);
};

export const getProjects = async () => {
  return await Project.findAll({
    include: [
      { model: ProjectStatus, as: "status" },
      { model: Task, as: "tasks" }
    ]
  });
};

export const getProjectById = async (id: string) => {
  const project = await Project.findOne({
    where: { id },
    include: [
      { model: ProjectStatus, as: "status" },
      { model: Task, as: "tasks" }
    ]
  });

  if (!project) throw new Error("Project not found");

  return project;
};

export const updateProject = async (id: string, data: any) => {
  await Project.update(data, { where: { id } });
  return { message: "Project updated successfully" };
};

export const deleteProject = async (id: string) => {
  await Project.destroy({ where: { id } });
  return { message: "Project deleted successfully" };
};