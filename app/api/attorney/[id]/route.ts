import { Response } from "@/constants/response";
import multerUploader from "@/lib/image-upload";
import Attorney from "@/lib/models/attorney.model";
import { NextApiRequest, NextApiResponse } from "next";

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
            attorney.image = imagePath;
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
   try {
        const { id }= req.query
        if (!id) return res.status(400).json({success: false, message: "Please provide attorney id"})

        const attorney = await Attorney.findByIdAndDelete(id);
        if (!attorney) {
            return res.status(404).json({ success: false, message: "Attorney not found" });
        }

        return res.status(200).json({ success: true, message: "Attorney updated successfully"})
   } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({ success: false, message: error.message });
        } else {
            return res.status(500).json({ success: false, message: "An unknown error occurred" });
        }
   }

}