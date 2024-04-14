import connectDB from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const routeHandler = async (req: NextRequest, res: NextResponse) => {
    await connectDB();
};


