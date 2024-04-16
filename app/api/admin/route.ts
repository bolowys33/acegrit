import { Response } from "@/constants/response";
import connectDB from "@/lib/db";
import Admin from "@/lib/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";


const routeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();
};

const adminRegister = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            res.status(400).json({success: false, message: "Please provide all required fields"})
        }

        const admin = new Admin({ username, password, email });
        await admin.save();
        
        res.status(201).json({success: true, message: "Admin registered successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: (error as Error).message });
    }
};
