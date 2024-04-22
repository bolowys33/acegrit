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

        return NextResponse.json({success: true, data: posts}, {status: 200})
    } catch (error) {}
}
