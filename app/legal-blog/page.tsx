import BlogPage from "@/components/BlogPage";
import { Suspense } from "react";
import { PropagateLoader } from "react-spinners";

export default function Page() {
    return (
        <Suspense
            fallback={
                <div className="grid place-items-center h-[515px] text-navy">
                    <PropagateLoader color="#000080" />
                </div>
            }>
            <BlogPage />
        </Suspense>
    );
}
