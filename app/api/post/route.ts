import connectDB from "@/lib/db";
import Post from "@/lib/models/post.model";
import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
    try {
        await connectDB();

        const post = await Post.find({});
        if (post.length === 0) {
            return NextResponse.json(
                { success: false, message: "No post found" },
                { status: 404 }
            );
        }
    } catch (error) {}
}
