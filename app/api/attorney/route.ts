import { Response } from "@/constants/response";
import connectDB from "@/lib/db";
import Attorney from "@/lib/models/attorney.model";
import { NextApiRequest, NextApiResponse } from "next";


const routeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB()
}

async function getAttorneys(req: NextApiRequest, res: NextApiResponse<Response>) {
    try {
        const attorneys = await Attorney.find({}).select('-__v')

        if (attorneys.length === 0) {
            return res.status(404).json({success: false, message: "No attorney found"})
        }

        re

    } catch (error) {
        
    }
}


async function addAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    
}