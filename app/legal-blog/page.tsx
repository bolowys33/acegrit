"use client"

import BlogSection from "@/components/BlogSection";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Social from "@/components/Social";
import usePosts from "@/hooks/usePosts";
import { Container } from "@mui/material";

const Blog = () => {
    const { posts, isFetching, error } = usePosts();

    if (isFetching) return null; // You can replace this with a loading spinner

    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    if (!posts || posts.length === 0) {
        return <div>No posts found.</div>;
    }

    return (
        <div className="">
            <PageBanner title="Legal Blog" classes="blog-image" />
            <Container maxWidth="xl">
                <div className="md:px-5">
                    <SectionTitle section="legal blog" />
                    <h3 className="text-[29px] md:text-[34px] text-start font-extrabold tracking-[1.5px]">
                        From the Desk
                    </h3>
                    <p className="tracking-[.5px] font-[500] text-zinc-400 my-6">
                        Our articles from the desk, aim to keep you updated with
                        current legislations, policies, pronouncements and
                        events within the legal space in Africa.
                    </p>
                    <SectionTitle section="posts" classes="mb-6" />
                    <BlogSection posts={posts} />
                </div>
            </Container>
            <Social classes="bg-zinc-200" />
        </div>
    );
};

export default Blog;
