import { Request, Response } from "express";
import {
  createCategoryService,
  getAllCategoriesService,
  getCategoryService,
  updateCategoryService,
  deleteCategoryService,
} from "@/services/categoryService";

// CREATE CATEGORY
export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await createCategoryService(req.body);
    return res.status(201).json({ success: true, message: "Category created", data: category });
  } catch (error: any) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// GET ALL CATEGORIES
export const getAllCategoriesController = async (_req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService();
    return res.status(200).json({ success: true, data: categories });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// GET SINGLE CATEGORY
export const getCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryService(req.params.id);
    return res.status(200).json({ success: true, data: category });
  } catch (error: any) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

// UPDATE CATEGORY
export const updateCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await updateCategoryService(req.params.id, req.body);
    return res.status(200).json({ success: true, message: "Category updated", data: category });
  } catch (error: any) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

// DELETE CATEGORY
export const deleteCategoryController = async (req: Request, res: Response) => {
  try {
    await deleteCategoryService(req.params.id);
    return res.status(200).json({ success: true, message: "Category deleted" });
  } catch (error: any) {
    return res.status(404).json({ success: false, message: error.message });
  }
};
