import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  username: string;
  email: string;
  iat: number;
  exp: number;
}

export async function middleware(request: NextRequest) {
  const token = request.headers.get("authorization");

  if (!token) {
    return NextResponse.json(
      { success: false, message: "Unauthorized. Please log in" },
      { status: 401 }
    );
  }

  try {
    const admin = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please log in" },
        { status: 401 }
      );
    }

    const response = NextResponse.next();
    response.headers.set("X-Admin-ID", admin.id);
    response.headers.set("X-Admin-Username", admin.username);
    response.headers.set("X-Admin-Email", admin.email);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}

export const config = {
  matcher: ["/api/:path*"],
};