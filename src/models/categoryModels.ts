import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  roles?: "admin" | "farmer" | "user";
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
    // roles: { type: String, enum: ["admin", "farmer", "user"], default: "user" },
  }
);
const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
