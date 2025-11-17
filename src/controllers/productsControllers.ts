// import { Request, Response } from "express";
// import {
//   createProductService,
//   getAllProductsService,
//   getProductService,
//   updateProductService,
//   deleteProductService,
//   getProductsByCategoryService,
// } from "@/service/productsService";

// // Create Product
// export const createProductController = async (req: Request, res: Response) => {
//   const result = await createProductService(req.body);
//   res.status(result.success ? 201 : 400).json(result);
// };

// // Get All Products
// export const getAllProductsController = async (_req: Request, res: Response) => {
//   const result = await getAllProductsService();
//   res.status(result.success ? 200 : 500).json(result);
// };

// // Get Product by ID
// export const getProductController = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await getProductService(id);
//   res.status(result.success ? 200 : 404).json(result);
// };

// // Update Product
// export const updateProductController = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await updateProductService(id, req.body);
//   res.status(result.success ? 200 : 404).json(result);
// };

// // Delete Product
// export const deleteProductController = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await deleteProductService(id);
//   res.status(result.success ? 200 : 404).json(result);
// };

// // Get Products by Category
// export const getProductsByCategoryController = async (req: Request, res: Response) => {
//   const { category } = req.params;
//   const result = await getProductsByCategoryService(category);
//   res.status(result.success ? 200 : 404).json(result);
// };
