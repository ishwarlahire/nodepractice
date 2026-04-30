import Project from "./project.model";
import Task from "./task.model";
import ProjectStatus from "../models/projectstatus.model";
import TaskStatus from "../models/taskstatus.model";
import User from "./user.model";

Project.belongsTo(ProjectStatus, {
  foreignKey: "status_id",
  as: "status"
});

Project.hasMany(Task, {
  foreignKey: "project_id",
  as: "tasks"
});

Task.belongsTo(Project, {
  foreignKey: "project_id",
  as: "project"
});

Task.belongsTo(TaskStatus, {
  foreignKey: "status_id",
  as: "status"
});

Project.belongsTo(User, {
  foreignKey: "created_by",
  as: "creator"
});

Task.belongsTo(User, {
  foreignKey: "assigned_to",
  as: "assignee"
});