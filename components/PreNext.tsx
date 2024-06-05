import Link from "next/link";
import SectionTitle from "./SectionTitle";

interface Post {
    title: string;
    post_url: string;
}

interface PrePost {
    previousPost: Post | null;
    nextPost: Post | null;
}

const PrePost = ({ previousPost, nextPost }: PrePost) => {
    return (
        <div className="flex justify-between font-extrabold mt-12">
            {previousPost && (
                <div className="flex-1">
                    <p className="tracking-[1px] mb-2 text-[13px] uppercase font-extrabold">
                        previous post
                    </p>
                    <Link
                        href={`/legal-blog/${previousPost.post_url}`}
                        className="text-[#222261] text-[17px]">
                        {previousPost.title}
                    </Link>
                </div>
            )}
            {nextPost && (
                <div className="flex-1 flex flex-col items-end">
                    <p className="self-end tracking-[1px] mb-2 text-[13px] uppercase font-extrabold">
                        next post
                    </p>
                    <Link
                        href={`/legal-blog/${nextPost.post_url}`}
                        className="text-[#222261] text-[17px]">
                        {nextPost.title}
                    </Link>
                </div>
            )}
        </div>
    );
};

export default PrePost;
