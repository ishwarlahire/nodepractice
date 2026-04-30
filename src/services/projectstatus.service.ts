import ProjectStatus from "../models/projectstatus.model";

export const createStatus = async (data: any) => {
  return await ProjectStatus.create(data);
};


export const getAllStatus = async () => {
  return await ProjectStatus.findAll();
};

export const getStatusById = async (id: string) => {
  const status = await ProjectStatus.findOne({ where: { id } });

  if (!status) throw new Error("Status not found");

  return status;
};

export const updateStatus = async (id: string, data: any) => {
  await ProjectStatus.update(data, { where: { id } });

  return { message: "Status updated successfully" };
};


export const deleteStatus = async (id: string) => {
  await ProjectStatus.destroy({ where: { id } });

  return { message: "Status deleted successfully" };
};