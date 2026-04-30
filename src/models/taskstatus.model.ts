import sequelize from "../connections/db";
import { DataTypes } from "sequelize";

const TaskStatus = sequelize.define(
  "TaskStatus",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: "task_status",
    timestamps: false
  }
);

export default TaskStatus;