import connectDB from "@/lib/db"

export async function GET(
    req: Request,
    { params }: { params: { url: string } }
): Promise<Response> {
    try {
        const {url} = params

        await connectDB()

        if (!url)
            return NextResponse.json(
                { success: false, message: "Please provide post URL" },
                { status: 400 }
            );
    } catch (error) {
        
    }
}
