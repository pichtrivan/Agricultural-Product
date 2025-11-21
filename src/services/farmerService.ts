
import { UserModel } from "@/models/userModels";
import { RoleModel } from "@/models/roleModels";
import { UserRoleModel } from "@/models/userRoleModels";
import { IRole } from "@/types/role";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { FarmerModel } from "@/models/farmerModels";

const generateToken = (userId: string, roles: string[]): string => {
  return jwt.sign({ userId, roles }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });
};

export const createFarmerService = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, userName, email, password, age, phone } = req.body;
    const existUser = await UserModel.findOne({ $or: [ { email }, { userName } ] });
    if (existUser) {
      res.status(400).json({ message: "User with this email or userName number already exist!" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      email,
      password: hashPassword,
      firstName,
      lastName,
      phone,
      age,
      userName,
    });
    await newUser.save();

    // set default role
    const defaultRole = await RoleModel.findOne({ name: "farmer" });
    if (!defaultRole) {
      throw new Error("Default role 'darmer' not found");
    }

    // create role and save in the the user_role collection
    await UserRoleModel.create({
      userId: newUser._id,
      roleId: defaultRole._id,
    });

    // fetch roles for token generation
    const fetchRole = await UserRoleModel.find({ userId: newUser._id }).populate<{ roleId: IRole }>("roleId");

    // role extractor
    const roles = fetchRole.map((ur) => (ur.roleId))

    const token = generateToken(
      newUser._id.toString(), 
      roles.map((role => role.name))
    );

    res.status(201).json({
      data: newUser,
      token,
    });
  } catch (error: any) {
    throw error;
  }
};

// create by id
//  export const getFarmerByIdService = async (req: Request, res: Response) => {
//    try {
//      const { id } = req.params;
//      const farmer = await FarmerModel.findById(id);
//      if (!farmer) {
//        return res.status(404).json({
//          success: false,
//          message: "Farmer not found",
//        });
//      }
//      return res.status(200).json({
//        success: true,
//        message: "Farmer fetched successfully",
//        data: farmer,
//      });
//    } catch (error: any) {
//      return res.status(500).json({
//        success: false,
//        message: error.message,
//      });
//    }
//  };