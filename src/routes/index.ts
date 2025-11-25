import { Router } from "express";
import authRoute from "@/routes/authRoutes";
import productsRoutes from "@/routes/productRoutes";
import categoryRoutes from "@/routes/categoryRoutes";
import farmerRoutes from "@/routes/farmerRoutes";

const router = Router();

router.use("/auth", authRoute);
router.use("/categories", categoryRoutes);
router.use("/products", productsRoutes);
router.use("/", farmerRoutes);

export default router;
