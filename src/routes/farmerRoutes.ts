import express from "express";
import { createFarmerController } from "@/controllers/farmerControllers";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Farmers
 *   description: Farmer management endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Farmer:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - email
 *         - phone
 *       properties:
 *         firstName:
 *           type: string
 *           example: John
 *         lastName:
 *           type: string
 *           example: Doe
 *         age:
 *           type: number
 *           example: 30
 *         email:
 *           type: string
 *           example: john@example.com
 *         phone:
 *           type: string
 *           example: "0123456789"
 */

/**
 * @swagger
 * /api/create-farmer:
 *   post:
 *     summary: Create a new farmer
 *     tags: [Farmers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Farmer'
 *     responses:
 *       201:
 *         description: Farmer created successfully
 *       400:
 *         description: Bad request
 */
router.post("/create-farmer", createFarmerController);
// router.delete("/delete/:id", ); // DELETE FARMER

export default router;
