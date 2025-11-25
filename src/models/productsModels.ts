import { Schema, model } from "mongoose";
import { IProduct } from "../types/products";

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    stock: { type: Number, default: 0 },
    image: { type: String },
  },
  { timestamps: true }
);

export default model<IProduct>("Product", productSchema);
