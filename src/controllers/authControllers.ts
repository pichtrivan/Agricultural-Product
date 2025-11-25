import { LoginService, registerService } from "@/services/authService";
import { Request, Response } from "express";

export const registerController = async (req: Request, res: Response) => {
  try {
    // console.log("Req", req.body);
    const result = await registerService(req, res);
    return res.json(result);
    
  } catch (error) {
    console.error("Error in registerController:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try{
  const result = await LoginService(req, res);
  return res.json(result);
  } catch (error) {
    console.error("Error in loginController:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};