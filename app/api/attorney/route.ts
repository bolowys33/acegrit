import { Response } from "@/constants/response";
import connectDB from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";


const routeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB()
}

async function addAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    
}