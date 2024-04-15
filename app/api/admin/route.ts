import connectDB from "@/lib/db";
import Admin from "@/lib/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";

const routeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();
};

const adminRegister = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { username, password, email } = req.body;
        const admin = new Admin({ username, password, email });
        await admin.save();
        res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
