"use client";

import usePosts from "@/hooks/usePosts";
import { Container } from "@mui/material";
import Link from "next/link";
import BlogSection from "./BlogSection";

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
        <Container maxWidth="xl">
            <div className="my-8 md:mx-auto md:w-[85%] flex flex-col">
                <h3 className="text-[29px] md:text-[34px] text-start font-extrabold tracking-[1.5px]">
                    Publications
                </h3>
                <p className="tracking-[.5px] font-[500] text-zinc-400 my-6">
                    Our articles from the desk aim to keep you updated with
                    current legislations, policies, pronouncements, and events
                    within the legal space in Africa.
                </p>
                <BlogSection posts={posts} />
                <Link
                    href="/legal-blog"
                    className="self-center text-[20px] transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                    view all
                </Link>
            </div>
        </Container>
    );
};

export default Blog;
