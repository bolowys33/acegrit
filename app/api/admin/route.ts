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
            return res.status(400).json({success: false, message: "Please provide all required fields"})
        }

        
        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { username }]
        });
        
        if (existingAdmin) {
            if (existingAdmin.email === email) {
                return res.status(400).json({ success: false, message: "Admin with email address already exists" });
            } else {
                return res.status(400).json({ success: false, message: "Admin with username already exists" });
            }
        }

        const admin = new Admin({ username, password, email });
        await admin.save();
        
        return res.status(201).json({success: true, message: "Admin registered successfully" });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, message: error.message });
          } else {
            return res.status(500).json({ success: false, message: "An unknown error occurred" });
          }
    }
};


export default routeHandler