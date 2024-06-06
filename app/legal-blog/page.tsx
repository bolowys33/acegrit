"use client";

import BlogSection from "@/components/BlogSection";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Social from "@/components/Social";
import usePosts, { Post } from "@/hooks/usePosts";
import { Container, Pagination } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import { useState } from "react";

const Blog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { posts, isFetching, error, getPosts, pagination } = usePosts(currentPage);

    const handlePageChange = (event: any, newPage: number) => {
        setCurrentPage(newPage);
        getPosts(newPage);
    };

    if (isFetching) {
        return (
            <div className="grid place-items-center h-[515px] text-navy">
                <PropagateLoader color="#000080" />
            </div>
        );
    }

    if (!isFetching && error) {
        return (
            <div className="grid place-items-center h-[515px] text-[red]">
                {error}
            </div>
        );
    }

    return (
        <div className="">
            <PageBanner title="Legal Blog" classes="blog-image" />
            <Container maxWidth="lg">
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
                    {<BlogSection posts={posts as Post[]} />}
                    {pagination && (
                        <Pagination
                            count={pagination.totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            classes={{ root: "my-4" }}
                            className="flex justify-center"
                        />
                    )}
                </div>
            </Container>
            <Social classes="bg-zinc-200" />
        </div>
    );
};

export default Blog;