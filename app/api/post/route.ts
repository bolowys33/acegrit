import connectDB from "@/lib/db";
import Post from "@/lib/models/post.model";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
    try {
        await connectDB();

        const posts = await Post.find({});
        if (posts.length === 0) {
            return NextResponse.json(
                { success: false, message: "No post found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, data: posts },
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
    try {
        await connectDB();

        const adminId = req.headers.get("X-Admin-ID");
        const adminUsername = req.headers.get("X-Admin-Username");
        const adminEmail = req.headers.get("X-Admin-Email");
        if (!adminId || !adminUsername || !adminEmail) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized. Please log in.",
                },
                { status: 401 }
            );
        }

        const formData = await req.formData()
        const title = formData.

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
