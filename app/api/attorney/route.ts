import { Response } from "@/constants/response";
import connectDB from "@/lib/db";
import multerUploader from "@/lib/image-upload";
import { withAuthentication } from "@/lib/middleware/auth";
import Attorney from "@/lib/models/attorney.model";
import { NextApiRequest, NextApiResponse } from "next";

interface MulterRequest extends NextApiRequest {
    file: any;
}

interface UpdateField {
    name? : string;
    position?: string;
    image?: string
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
            await updateAttorney(req as MulterRequest, res);
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

async function updateAttorney(req: MulterRequest, res: NextApiResponse<Response>) {
    try {
        const { id }= req.query
        const { name, position} = req.body
        let imagePath

        if (!id) return res.status(400).json({success: false, message: "Please provide attorney id"})

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
    
        const attorney = await Attorney.findById(id);

        if (!attorney) {
            return res.status(404).json({ success: false, message: "Attorney not found" });
        }

        attorney.name = name || attorney.name;
        attorney.position = position || attorney.position;

        if (imagePath) {
            attorney.image = imagePath; // Update the image path if a new image is uploaded
        }

        const updatedAttorney = await attorney.save();

        return res.status(200).json({ success: true, message: "Attorney updated successfully", data: updatedAttorney });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, message: error.message });
          } else {
            return res.status(500).json({ success: false, message: "An unknown error occurred" });
          }
    }

}

async function removeAttorney(req: NextApiRequest, res: NextApiResponse<Response>) {
    const { id }= req.query
    if (!id) return res.status(400).json({success: false, message: "Please provide attorney id"})

    const attorney = await Attorney.findByIdAndDelete(id);
    if (!attorney) {
        return NextResponse.json({ success: false, message: "Attorney not found" }, { status: 404 });
    }

    return res.status(200).json({ success: true, message: "Attorney updated successfully"})

}