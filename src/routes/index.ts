import { Router } from "express";
import authRoute from "./authRoutes";
// import productsRoutes from "./productRoutes";
import categoryRoutes from "@/routes/categoryRoutes";

const router = Router();

router.use("/auth", authRoute);
router.use("/categories", categoryRoutes);
// router.use("/products", productRoutes);

export default router;
