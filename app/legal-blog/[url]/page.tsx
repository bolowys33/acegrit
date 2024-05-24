"use client"

import useSinglePost from "@/hooks/useSinglePost";
import { Container } from "@mui/material";

const BlogContent = ({ params }: { params: { url: string } }) => {
    const { url } = params;
    const { error, isFetching, post } = useSinglePost(url);

    return (
        <div>
            <div className={`bg-cover bg-center text-center mb-10 blog-image`}>
                <div className="bg-black bg-opacity-45 py-[100px] md:py-[180px]">
                    <h1 className="text-white font-main font-bold text-2xl md:text-[50px] mx-6">
                        {post?.title}
                    </h1>
                </div>
            </div>
            <Container
                maxWidth="md"
                className="space-y-4 font-poppins text-justify font-medium text-zinc-600">
                <div
                    dangerouslySetInnerHTML={{
                        __html: post?.content ?? "",
                    }}
                />
            </Container>
        </div>
    );
};

export default BlogContent;
