import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Admin from "@/lib/models/admin.model";

export async function POST(request: Request): Promise<Response> {
    try {
        await connectDB();

        const formData = await request.formData();
        const username = formData.get("username") as string;
        const password = formData.get("password");
        const email = formData.get("email") as string;
        const firstname = formData.get("firstname");
        const lastname = formData.get("lastname");

        if (!username || !password || !email || !firstname || !lastname) {
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

        const admin = new Admin({
            username,
            password,
            email,
            firstname,
            lastname,
        });
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
            if (error.message === "Error: Unexpected end of form")
                return NextResponse.json(
                    {
                        success: false,
                        message: "Please provide all required fields",
                    },
                    { status: 400 }
                );

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
        await connectDB();

        const adminId = req.headers.get("X-Admin-ID");
        if (!adminId) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized. Please log in.",
                },
                { status: 401 }
            );
        }

        const admin = await Admin.findById(adminId).select("-__v password");
        return NextResponse.json(
            {
                success: true,
                data: admin,
            },
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
