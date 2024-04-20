import connectDB from "@/lib/db";
import multerUploader from "@/lib/image-upload";
import { withAuthentication } from "@/lib/middleware/auth";
import Attorney from "@/lib/models/attorney.model";
import { NextResponse } from "next/server";

interface MulterRequest extends Request {
    file: any;
}


export async function GET(): Promise<Response> {
    await connectDB();

    try {
        const attorneys = await Attorney.find({}).select("-__v");

        if (attorneys.length === 0) {
            return NextResponse.json(
                {
                    success: false,
                    message: "No attorney found",
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: "Attorney added successfully",
                data: attorneys,
            },
            { status: 400 }
        );
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 400 }
            );
        } else {
            return NextResponse.json(
                { success: false, message: "An unknown error occurred" },
                { status: 500 }
            );
        }
    }
}



export async function POST(req: MulterRequest): Promise<Response> {
    await connectDB();

    await withAuthentication(req, async function (req) {
        try {
            const { name, position } = await req.json();
            let imagePath;
    
            await new Promise<void>((resolve, reject) => {
                multerUploader.single("image")(req as any, res as any, (err) => {
                    if (err) {
                        reject(new Error("Error uploading image: " + err.message));
                    } else {
                        imagePath = req.file.path;
                        resolve();
                    }
                });
            });
    
            if (!name || !position || !imagePath)
                return NextResponse.json(
                    {
                        success: false,
                        message: "Please provide all required fields",
                    },
                    { status: 400 }
                );
    
            const attorney = new Attorney({ name, position, image: imagePath });
            await attorney.save();
    
            return NextResponse.json(
                {
                    success: false,
                    message: "Attorney added successfully",
                    data: attorney,
                },
                { status: 400 }
            );
        } catch (error) {
            if (error instanceof Error) {
                return NextResponse.json(
                    { success: false, message: error.message },
                    { status: 400 }
                );
            } else {
                return NextResponse.json(
                    { success: false, message: "An unknown error occurred" },
                    { status: 500 }
                );
            }
        }
    })


}
