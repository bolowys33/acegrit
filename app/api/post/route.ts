import connectDB from "@/lib/db";


export async function GET(): Promise<Response> {
    try {
        await connectDB()

        
    } catch (error) {
        
    }
}