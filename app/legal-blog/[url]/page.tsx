"use client";

import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import useSinglePost from "@/hooks/useSinglePost";
import { Container } from "@mui/material";

const BlogContent = ({ params }: { params: { url: string } }) => {
    const { url } = params;
    const { error, isFetching, post } = useSinglePost(url);

    return (
        <div>
            <div className={`bg-cover bg-center text-center mb-10 blog-image`}>
                <div className="bg-black bg-opacity-60 py-[100px] md:py-[180px]">
                    <h1 className="text-white font-main font-bold text-2xl md:text-[50px] mx-6 leading-none">
                        {post?.title}
                    </h1>
                </div>
            </div>
            <Container
                maxWidth="lg"
                className="w-full flex flex-col-reverse md:flex-row gap-5 lg:gap-10 font-poppins mb-6 text-justify font-medium text-zinc-600">
                <div>
                    <div
                        className="flex-[2] lg:flex-[3]"
                        dangerouslySetInnerHTML={{
                            __html: post?.content ?? "",
                        }}
                    />
                    <Comments comments={post?.comments} />
                    <CommentForm />
                </div>
                <div className="flex-[1]">
                    jhdsjkbdshjxokdp[kfjodjcjxbcjbuxc
                </div>
            </Container>
        </div>
    );
};

export default BlogContent;
