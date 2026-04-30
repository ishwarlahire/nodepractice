import User from "../models/user.model";
import UserProfile from "../models/userProfile.model";
import { Op } from "sequelize";
import { getPagination } from "../uitls/pagination";


export const isEmailExist = async (email: string) => {
    return await User.findOne({
        where: { email }
    });
};

export const createUser = async (data: any) => {
    const user = await User.create(data);

    if (data.profile) {
        await UserProfile.create({
            ...data.profile,
            user_id: user.getDataValue("id")
        });
    }

    return user;
};
export const getUsers = async (body: any) => {
    const { page, limit, offset } = getPagination(body);

    const where: any = {};

    if (body.search) {
        where[Op.or] = [
            { firstname: { [Op.like]: `%${body.search}%` } },
            { middlename: { [Op.like]: `%${body.search}%` } },
            { lastname: { [Op.like]: `%${body.search}%` } },
            { email: { [Op.like]: `%${body.search}%` } }
        ];
        if (body.search.toLowerCase() === "true") {
            where[Op.or].push({ is_active: true });
        }

        if (body.search.toLowerCase() === "false") {
            where[Op.or].push({ is_active: false });
        }
    }

    const users = await User.findAndCountAll({
        where,
        limit,
        offset,
        distinct: true,
        include: [
            {
                model: UserProfile,
                as: "profile_user",
                required: false
            }
        ]
    });

    return {
        total: users.count,
        page,
        limit,
        data: users.rows
    };
};

export const getUserById = async (id: string) => {
    const user = await User.findAndCountAll({
        where: { id },
        distinct: true,

        include: [
            {
                model: UserProfile,
                as: "profile_user",
                required: false
            }
        ]
    });

    if (user.count === 0) {
        throw new Error("User not found");
    }

    return {
        total: user.count,
        data: user.rows[0]
    };
};

export const updateUser = async (id: string, data: any) => {
    await User.update(data, {
        where: { id }
    });

    if (data.profile) {
        await UserProfile.update(data.profile, {
            where: { user_id: id }
        });
    }

    return {
        message: "User updated successfully"
    };
};

export const deleteUser = async (id: string) => {
    await User.destroy({
        where: { id }
    });

    return {
        message: "User deleted successfully"
    };
};