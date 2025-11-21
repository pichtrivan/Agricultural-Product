import { Router } from "express";
import authRoute from "./authRoutes";
// import productsRoutes from "./productRoutes";
import categoryRoutes from "@/routes/categoryRoutes";
import farmerRoutes from "@/routes/farmerRoutes";

const router = Router();

router.use("/auth", authRoute);
router.use("/categories", categoryRoutes);
// router.use("/products", productRoutes);
router.use("/", farmerRoutes);

export default router;
