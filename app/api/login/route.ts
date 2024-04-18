import { Response } from "@/constants/response";
import Admin from "@/lib/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET

async function adminLogin(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
   try {
    const {username, password} = req.body
    if (!username || !password) {
        return res.status(400).json({success: false, message: "Please provide required fields"})
    }
    
    const admin = await Admin.findOne({username})
    const isPasswordValid = await bcrypt.compare(password, admin.password)
    if (!admin || !isPasswordValid) {
        return res.status(400).json({success: false, message: "Invalid credentials"})
    }

    const payload = {id: admin._id, username: admin.username, email: admin.email}
    const token = jwt.sign(payload, secret as string, { expiresIn: '2h' })

   } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, message: error.message });
        } else {
            return res.status(500).json({ success: false, message: "An unknown error occurred" });
        }
   }

}
