import sequelize from "../config/db";
import { DataTypes } from "sequelize";

const ProjectStatus = sequelize.define(
    "ProjectStatus",
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
        tableName: "project_status",
        timestamps: false
    }
);

export default ProjectStatus;