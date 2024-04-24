import connectDB from "@/lib/db";
import { generateToken } from "@/lib/email/generateToken";
import { Admin, Token } from "@/lib/models/model";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
    try {
        await connectDB();

        const formData = await req.formData();
        const email = formData.get("email") as string;
        if (!email) {
            return NextResponse.json(
                { success: false, message: "Please provide required field" },
                { status: 400 }
            );
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json(
                {
                    success: false,
                    message: "No account with the provided email",
                },
                { status: 404 }
            );
        }

        const recoverToken = new Token({
            token: generateToken(),
            admin_id: admin._id,
        });

        await recoverToken.save();

        return NextResponse.json(
            {
                success: true,
                message: "Token sent to email, expires in 5mins",
            },
            { status: 200 }
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
