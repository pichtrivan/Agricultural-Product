import express from "express";
import {
  CreateCategoryController,
  GetAllCategoriesController,
  GetCategoryController,
  UpdateCategoryController,
  DeleteCategoryController,
} from "@/controllers/categoryControllers";
import { authenticate ,authorize} from "@/Middlewares/roleMiddleware";

const router = express.Router();

router.post("/create/category", authenticate,
  authorize(["admin" , "farmer"]), CreateCategoryController);
router.get("/category", authenticate,
  authorize(["admin" , "farmer"]), GetAllCategoriesController);
// router.get("/categoryById/:id", authenticate,
//   authorize(["admin" , "farmer"]), GetCategoryController);
router.put("/update/:id",authenticate,
  authorize(["admin" , "farmer"]), UpdateCategoryController);
router.delete("/delete/:id", authenticate,
  authorize(["admin" , "farmer"]) ,DeleteCategoryController);

export default router;
