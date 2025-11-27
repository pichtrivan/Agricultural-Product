import express from "express";
import {
  createProductController,
  getAllProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
  // getProductsByCategoryController,
} from "@/controllers/productsControllers";

const router = express.Router();

// CREATE PRODUCT
router.post("/create/product", createProductController);

// GET ALL PRODUCTS
router.get("/product", getAllProductsController);

// GET SINGLE PRODUCT BY ID
router.get("/:id", getProductController);

// UPDATE PRODUCT
router.put("/update/:id", updateProductController);

// DELETE PRODUCT
router.delete("/delete/:id", deleteProductController);


export default router;