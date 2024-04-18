import { Response } from "@/constants/response";
import Admin from "@/lib/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

async function adminLogin(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    const {username, password} = req.body
    if (!username || !password) {
        return res.status(400).json({success: false, message: "Please provide required fields"})
    }

    const admin = Admin.findOne({username})
    if (!admin) {
        return res.status(400).json({success: false, message: "Invalid credentials"})
    }

    bcrypt.compare

}
