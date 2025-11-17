// import { Schema, model, } from "mongoose";
// import { IRole } from "@/types/role";

// const roleSchema = new Schema<IRole>(
//   {
//     name: { type: String, required: true, unique: true },
//     description: { type: String },
//   },
//   { timestamps: true }
// );

// export const RoleModel = model<IRole>("Role", roleSchema);

import  { Schema, model } from "mongoose";
import type { IUserRole } from "@/types/userRole";

const userRoleSchema = new Schema<IUserRole>(
  {
    userId: { type: Schema.Types.ObjectId as any, ref: "User", required: true },
    roleId: { type: Schema.Types.ObjectId as any, ref: "Role", required: true },
    assignedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

export const UserRoleModel = model<IUserRole>("UserRole", userRoleSchema);