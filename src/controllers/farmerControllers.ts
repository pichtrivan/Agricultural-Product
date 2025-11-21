import { Request, Response } from "express";
import { createFarmerService } from "@/services/farmerService";

export const createFarmerController = async (req: Request, res: Response) => {
  try {
    console.log("Req", req.body);
    const result = await createFarmerService(req, res);
    return res.json(result);
    
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

// export const getFarmerByIdController = async (req: Request, res: Response) => {
//   try {
//     const result = await createFarmerService(req, res);
//     return res.json(result);
//   } catch (error) {
//     console.error("Error in getFarmerByIdController:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error"
//     });
//   }
// };