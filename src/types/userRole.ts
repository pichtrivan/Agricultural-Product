import { Document } from "mongoose";

export interface IUserRole extends Document {
   userId: string;
   roleId: string;
   assignedAt: Date;
}
