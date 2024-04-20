import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { JWSInvalid, JWTClaimValidationFailed, JWTExpired} from "jose/errors";

interface DecodedToken {
    id: string;
    username: string;
    email: string;
    iat: number;
    exp: number;
}

export async function middleware(request: NextRequest) {
    try {
        const token = request.headers.get("authorization");
        if (!token) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Unauthorized. Please provide authorization token",
                },
                { status: 401 }
            );
        }

        const decoded = await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET as string)
        );
        const response = NextResponse.next();
        response.headers.set("X-Admin-ID", decoded.payload.id as string);
        response.headers.set(
            "X-Admin-Username",
            decoded.payload.username as string
        );
        response.headers.set("X-Admin-Email", decoded.payload.email as string);
        return response;
    } catch (error) {
        if (error instanceof JWTExpired) {
            return NextResponse.json(
                { success: false, message: "jwt expired" },
                { status: 401 }
            );
        } else if (error instanceof JWSInvalid) {
            return NextResponse.json(
                { success: false, message: "Invalid token" },
                { status: 401 }
            );
        } else if (error instanceof JWTClaimValidationFailed) {
            return NextResponse.json(
                { success: false, message: "Invalid token" },
                { status: 401 }
            );
        }
         else {
            console.log(error);
            return NextResponse.json(
                { success: false, message: "An unknown error occurred" },
                { status: 500 }
                
            );
        }
    }
}

export const config = {
    matcher: ["/api/attorney", "/api/admin", "/api/post"],
};
