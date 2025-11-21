import express from "express";
import {
  createCategoryController,
  getAllCategoriesController,
  getCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "@/controllers/categoryControllers";

const router = express.Router();

// CREATE CATEGORY
router.post("/create/category", createCategoryController);

// GET ALL CATEGORIES
router.get("/category", getAllCategoriesController);

// GET SINGLE CATEGORY BY ID
router.get("byid/:id", getCategoryController);

// UPDATE CATEGORY
router.put("/update/:id", updateCategoryController);

// DELETE CATEGORY
router.delete("delete/:id", deleteCategoryController);

export default router;
