import connectDB from "@/lib/db";
import Admin from "@/lib/models/admin.model";
import { NextApiRequest, NextApiResponse } from "next";

interface Response {
    success: boolean;
    message: string
}

const routeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB();
};

const adminRegister = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { username, password, email } = req.body;
        if (!username || !password || !email) {
            res.status(400).json()
        }

        const admin = new Admin({ username, password, email });
        await admin.save();
        res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
