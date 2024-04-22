import connectDB from "@/lib/db";
import Post from "@/lib/models/post.model";
import { NextResponse } from "next/server";

export async function GET(
   req: Request, { params }: { params: { url: string } }
): Promise<Response> {
    try {
        const { url } = params;

        await connectDB();

        if (!url)
            return NextResponse.json(
                { success: false, message: "Please provide post URL" },
                { status: 400 }
            );

        const post = await Post.findOne({ post_url: url }).select("-__v");
        if (!post) {
            return NextResponse.json(
                { success: false, message: "Post not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({success: true, data: post})
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
