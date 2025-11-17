import { Schema, model, } from "mongoose";
import { IRole } from "@/types/role";


const roleSchema = new Schema<IRole>(
  {

    id : { type: Schema.Types.ObjectId , required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const RoleModel = model<IRole>("Role", roleSchema);