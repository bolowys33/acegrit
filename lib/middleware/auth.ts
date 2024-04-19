import { NextResponse } from "next/server";
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
    req: Request,
    handler: (req: Request) => Promise<Response>
  ) => {
    try {
      const token = req.headers.get("token");
      if (!token) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorized. Please log in",
            },
            { status: 401 }
        );
      }
  
      const admin = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
      
      if (!admin) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorized. Please log in",
            },
            { status: 401 }
        );
      }

      (req as any).admin = admin;
      await handler(req);
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 400 }
            );
        } else {
            return NextResponse.json(
                { success: false, message: "An unknown error occurred" },
                { status: 500 }
            );
        }
    }
  };
