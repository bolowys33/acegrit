import { Response } from "@/constants/response";
import Admin from "@/lib/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

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

    const token = jwt.sign(, process.env.JWT_SECRET, { expiresIn: '2h' })

   } catch (error) {
    
   }

}
