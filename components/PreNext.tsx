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
        <div>
            {previousPost && (
                <div>
                    <SectionTitle section="previous post" />
                    <Link href={previousPost.post_url}>
                        {previousPost.title}
                    </Link>
                </div>
            )}
            {nextPost && (
                <div>
                    <SectionTitle section="next post" />
                    <Link href={nextPost.post_url}>{nextPost.title}</Link>
                </div>
            )}
        </div>
    );
};

export default PrePost;
