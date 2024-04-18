import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { Response } from "@/constants/response";

interface DecodedToken {
    id: string; 
    username: string; 
    email: string; 
    iat: number; 
    exp: number; 
  }
  

  export const withAuthentication = async (
    req: NextApiRequest,
    res: NextApiResponse<Response>,
    handler: (req: NextApiRequest, res: NextApiResponse<Response>) => Promise<void>
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({success: false, message: 'Unauthorized. Please log in'})
      }
  
      const admin = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
      
      if (!admin) {
        return res.status(401).json({ success: false, message: 'Unauthorized. Please log in' });
      }

      (req as any).admin = admin;
      await handler(req, res);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ success: false, message: error.message });
      } else {
        return res.status(500).json({ success: false, message: 'An unknown error occurred' });
      }
    }
  };
