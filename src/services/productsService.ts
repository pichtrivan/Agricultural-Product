import productModel from "@/models/productsModels";
import { IProduct } from "@/types/products";

// ===================== CREATE PRODUCT =====================
export const createProductService = async (productData: Partial<IProduct>) => {
  try {
    const existProduct = await productModel.findOne({ name: productData.name });
    if (existProduct) {
      return { success: false, message: "Product name already exists" };
    }

    const newProduct = new productModel(productData);
    await newProduct.save();

    return { success: true, data: newProduct, message: "Product created successfully" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// ===================== GET ALL PRODUCTS =====================
export const getAllProductsService = async () => {
  try {
    const products = await productModel.find();
    return { success: true, data: products };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// ===================== GET PRODUCT BY ID =====================
export const getProductService = async (id: string) => {
  try {
    const product = await productModel.findById(id);
    if (!product) return { success: false, message: "Product not found" };
    return { success: true, data: product };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// ===================== UPDATE PRODUCT =====================
export const updateProductService = async (id: string, productData: Partial<IProduct>) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(id, productData, { new: true });
    if (!updatedProduct) return { success: false, message: "Product not found" };
    return { success: true, data: updatedProduct, message: "Product updated successfully" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// ===================== DELETE PRODUCT =====================
export const deleteProductService = async (id: string) => {
  try {
    const existProduct = await productModel.findById(id);
    if (!existProduct) return { success: false, message: "Product not found" };

    await productModel.findByIdAndDelete(id);
    return { success: true, message: "Product deleted successfully" };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};

// // ===================== GET PRODUCTS BY CATEGORY =====================
// export const getProductsByCategoryService = async (category: string) => {
//   try {
//     const products = await productModel.find({ category });
//     if (!products || products.length === 0) return { success: false, message: "No products found for this category" };
//     return { success: true, data: products };
//   } catch (error: any) {
//     return { success: false, message: error.message };
//   }
// };
