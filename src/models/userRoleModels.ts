import  { Schema, model } from "mongoose";
import type { IUserRole } from "@/types/userRole";

const userRoleSchema = new Schema<IUserRole>(
  {
    userId: { type: Schema.Types.ObjectId as any, ref: "User", required: true },
    roleId: { type: Schema.Types.ObjectId as any, ref: "Role", required: true },
    // assignedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const UserRoleModel = model<IUserRole>("UserRole", userRoleSchema);