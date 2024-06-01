"use client";

import CommentForm from "@/components/CommentForm";
import Comments from "@/components/Comments";
import useSinglePost from "@/hooks/useSinglePost";
import { formatTime } from "@/utils/formatDate";
import { Container } from "@mui/material";
import { PropagateLoader } from "react-spinners";

const BlogContent = ({ params }: { params: { url: string } }) => {
    const { url } = params;
    const { error, isFetching, post } = useSinglePost(url);

    if (isFetching) {
        return <div className="grid place-items-center h-[515px] text-navy">
            <PropagateLoader color="#000080" />
        </div>
    }

    if (!isFetching && error) {
        return <div className="grid place-items-center h-[515px] text-[red]">
            {error}
        </div>
    }

    return (
        <div>
            <div className={`bg-cover bg-center text-center mb-10 blog-image`}>
                <div className="bg-black bg-opacity-60 py-[100px] md:py-[180px] space-y-8">
                    <h1 className="text-white font-main font-bold text-2xl md:text-[50px] mx-6 leading-none">
                        {post?.title}
                    </h1>
                    <div className="space-x-6 text-white text-sm md:text-lg font-medium">
                        <span>{formatTime(post?.date_created as string)}</span>
                        <span>*</span>
                        <span>
                            {post && post.comments && post.comments.length === 0
                                ? "No"
                                : post?.comments.length}{" "}
                            {post && post.comments && post.comments.length < 2
                                ? "comment"
                                : "comments"}
                        </span>
                    </div>
                </div>
            </div>
            <Container
                maxWidth="lg"
                className="w-full flex flex-col-reverse md:flex-row gap-5 lg:gap-10 font-poppins mb-6 text-justify font-medium text-zinc-600">
                <div className="flex-[3] lg:flex-[4]">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post?.content ?? "",
                        }}
                    />
                    <Comments comments={post?.comments} />
                    <CommentForm id={post?._id as string} />
                </div>
                <div className="flex-[1]">
                    <p className="text-navy font-bold text-lg">Author</p>
                    <span className="font-bold">
                        {post?.author.firstname} {post?.author.lastname}
                    </span>
                </div>
            </Container>
        </div>
    );
};

export default BlogContent;
