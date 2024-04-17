import { Response } from "@/constants/response";
import connectDB from "@/lib/db";
import Attorney from "@/lib/models/attorney.model";
import { NextApiRequest, NextApiResponse } from "next";


const routeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectDB()

    switch (req.method) {
        case "POST":
          await addAttorney(req, res);
          break;
        case "GET":
          await getAttorneys(req, res);
          break;
        default:
          return res
            .status(400)
            .json({ success: false, message: "Unsupported HTTP method" });
      }
}

async function getAttorneys(req: NextApiRequest, res: NextApiResponse<Response>) {
    try {
        const attorneys = await Attorney.find({}).select('-__v')

        if (attorneys.length === 0) {
            return res.status(404).json({success: false, message: "No attorney found"})
        }

        return res.status(200).json({success: true, message:"Attorney added successfully", data: attorneys})

    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, message: error.message });
          } else {
            return res.status(500).json({ success: false, message: "An unknown error occurred" });
          }
    }
}


async function addAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    
}

async function updateAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    
}

async function removeAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    
}