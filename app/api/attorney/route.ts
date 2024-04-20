import connectDB from "@/lib/db";
import uploadImage from "@/lib/image-upload";
import Attorney from "@/lib/models/attorney.model";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
    await connectDB();
    try {
        const attorneys = await Attorney.find({}).select("-__v");
        if (attorneys.length === 0) {
            return NextResponse.json(
                { success: false, message: "No attorney found" },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { success: true, data: attorneys },
            { status: 200 }
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

export async function POST(req: Request): Promise<Response> {
    await connectDB();
    try {
        const adminId = req.headers.get("X-Admin-ID");
        const adminUsername = req.headers.get("X-Admin-Username");
        const adminEmail = req.headers.get("X-Admin-Email");
        if (!adminId || !adminUsername || !adminEmail) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized. Please log in attorney",
                },
                { status: 401 }
            );
        }

        const formData = await req.formData();
        const name = formData.get("name")?.toString();
        const position = formData.get("position")?.toString();
        const image = formData.get("image") as File;

        if (!name || !position || !image) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please provide all required fields",
                },
                { status: 400 }
            );
        }

        const maxFileSizeInBytes = 1 * 1024 * 1024; // 1MB
        if (image.size > maxFileSizeInBytes) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Image file size should not exceed 1MB",
                },
                { status: 400 }
            );
        }

        const mimeType = image.type;
        const imageBuffer = await image.arrayBuffer();
        const encoding = "base64";
        const base64Data = Buffer.from(imageBuffer).toString("base64");

        const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

        const imagePath = await uploadImage(fileUri);

        const attorney = new Attorney({ name, position, image: imagePath });
        await attorney.save();
        return NextResponse.json(
            {
                success: true,
                message: "Attorney added successfully",
                data: attorney,
            },
            { status: 201 }
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
