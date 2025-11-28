import { Request, Response } from "express";
import {
  createProductService,
  getAllProductsService,
  getProductService,
  updateProductService,
  deleteProductService,
  getProductsByDetailService
} from "@/services/productsService";

// CREATE PRODUCT
export const createProductController = async (req: Request, res: Response) => {
  try {
    //ទាញ data ពី req.body
    //ហៅ createProductService ដើម្បីបង្កើតផលិតផលថ្មី
    const product = await createProductService(req.body);

    if (!product) {
      //ប្រសិនបើ product មានរួច → 400 Bad Request
      return res.status(400).json({ success: false, message: "Product already exists" });
    }
    //ប្រសិនបើបានបង្កើត → 201 Created + JSON data
    res.status(201).json({ success: true, message: "Product created successfully", data: product });
  } catch (error) {
    //ប្រសិនបើមាន error → 500 Internal Server Error
    res.status(500).json({ success: false, message: "Error creating product", error });
  }
};

// GET ALL PRODUCTS

//ហៅ service ដើម្បីទាញ products ទាំងអស់
export const getAllProductsController = async (_req: Request, res: Response) => {
  try {
    const products = await getAllProductsService();
    //ជោគជ័យ → 200 OK
    res.status(200).json({ success: true, message: "Products fetched successfully", data: products });
  } catch (error) {
    //បរាជ័យ → 500 Internal Server Error
    res.status(500).json({ success: false, message: "Error fetching products", error });
  }
};

// GET SINGLE PRODUCT
//ទាញ id ពី URL params ហើយហៅ service ដើម្បីទាញ product តែមួយ
export const getProductController = async (req: Request, res: Response) => {
  try {
    //ទាញ id ពី URL params
    const product = await getProductService(req.params.id);
    if (!product) {
      //ប្រសិនបើមិនមាន product នោះ → 404 Not Found
      return res.status(404).json({ success: false, message: "Product not found" });
    }
//ប្រសិនបើមាន → 200 OK 
    res.status(200).json({ success: true, message: "Product fetched successfully", data: product });
  } catch (error) {
    //ប្រសិនបើមាន error → 500 Internal Server Error
    res.status(500).json({ success: false, message: "Error fetching product", error });
  }
};

// UPDATE PRODUCT
//ទាញ id ពី URL params និង data ពី req.body ហើយហៅ service ដើម្បីធ្វើបច្ចុប្បន្នភាព product
export const updateProductController = async (req: Request, res: Response) => {
  try {
    //ទាញ id ពី URL params និង data ពី req.body
    const product = await updateProductService(req.params.id, req.body);
    //ប្រសិនបើមិនមាន product នោះ → 404 Not Found
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    //ប្រសិនបើបានធ្វើបច្ចុប្បន្នភាព → 200 OK + JSON data
    res.status(200).json({ success: true, message: "Product updated successfully", data: product });
  } catch (error) {
    //ប្រសិនបើមាន error → 500 Internal Server Error
    res.status(500).json({ success: false, message: "Error updating product", error });
  }
};

// DELETE PRODUCT
//ទាញ id ពី URL params ហើយហៅ service ដើម្បីលុប product
export const deleteProductController = async (req: Request, res: Response) => {
  try {
    //ទាញ id ពី URL params
    const product = await deleteProductService(req.params.id);
    //ប្រសិនបើមិនមាន product នោះ → 404 Not Found
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    //ប្រសិនបើបានលុប → 200 OK + JSON data
    res.status(200).json({ success: true, message: "Product deleted successfully", data: product });
  } catch (error) {
    //ប្រសិនបើមាន error → 500 Internal Server Error
    res.status(500).json({ success: false, message: "Error deleting product", error });
  }
};
// GET products BY Detail

export const getProductsByDetailController = async (req: Request, res: Response) => {
  try {
    const detailKeyword = req.params.detail; // or req.query.detail if you prefer query string
    const products = await getProductsByDetailService(detailKeyword);

    if (!products || products.length === 0) {
      return res.status(404).json({ success: false, message: "No products found with this detail" });
    }

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching products", error });
  }
};