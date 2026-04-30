import sequelize from "../connections/db";
import { DataTypes } from "sequelize";

const Task = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    project_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    priority: {
      type: DataTypes.STRING,
      defaultValue: "medium"
    },
    assigned_to: {
      type: DataTypes.UUID
    },
    due_date: {
      type: DataTypes.DATE
    },
    created_by: {
      type: DataTypes.UUID,
      allowNull: false
    }
  },
  {
    tableName: "tasks",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);

export default Task;