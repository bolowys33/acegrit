import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Admin from "@/lib/models/admin.model";

export async function POST(request: Request): Promise<Response> {
    try {
        await connectDB();
        
        const { username, password, email } = await request.json();

        if (!username || !password || !email) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please provide all required fields",
                },
                { status: 400 }
            );
        }

        const existingAdmin = await Admin.findOne({
            $or: [{ email }, { username }],
        });

        if (existingAdmin) {
            if (existingAdmin.email === email) {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Admin with email address already exists",
                    },
                    { status: 400 }
                );
            } else {
                return NextResponse.json(
                    {
                        success: false,
                        message: "Admin with username already exists",
                    },
                    { status: 400 }
                );
            }
        }

        const admin = new Admin({ username, password, email });
        await admin.save();

        return NextResponse.json(
            {
                success: true,
                message: "Admin registered successfully",
                data: admin,
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

export async function GET(req: Request): Promise<Response> {
    try {
        await connectDB()

        
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
