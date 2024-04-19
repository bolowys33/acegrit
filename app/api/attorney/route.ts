import { Response } from "@/constants/response";
import connectDB from "@/lib/db";
import multerUploader from "@/lib/image-upload";
import { withAuthentication } from "@/lib/middleware/auth";
import Attorney from "@/lib/models/attorney.model";
import { NextApiRequest, NextApiResponse } from "next";

interface MulterRequest extends NextApiRequest {
    file: any;
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
    await withAuthentication(req, res, async (req: NextApiRequest, res: NextApiResponse<Response>) => {
        await connectDB()

        switch (req.method) {
            case "POST":
            await addAttorney(req as MulterRequest, res);
            break;
            case "GET":
            await getAttorneys(req, res);
            break;
            case "UPDATE":
            await updateAttorney(req, res);
            break;
            case "DELETE":
            await removeAttorney(req, res);
            break;
            default:
            return res
                .status(400)
                .json({ success: false, message: "Unsupported HTTP method" });
        }
        });
    
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


async function addAttorney(req: MulterRequest, res: NextApiResponse<Response>) {
    try {
        const {name, position} = req.body
        let imagePath

        await new Promise<void>((resolve, reject) => {
            multerUploader.single('image')(req as any, res as any, err => {
                if (err) {
                    reject(new Error('Error uploading image: ' + err.message));
                } else {
                    imagePath = req.file.path;
                    resolve();
                }
            });
        });

        if(!name || !position || !imagePath) return res.status(400).json({success: false, message: "Please provide all required fields"})

        const attorney = new Attorney({name, position, image: imagePath})  
        await attorney.save()

        return res.status(201).json({success: true, message: "Attorney added successfully", data: attorney});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, message: error.message });
          } else {
            return res.status(500).json({ success: false, message: "An unknown error occurred" });
          }
    }

}

async function updateAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    const {position, name } = req.body
}

async function removeAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    
}