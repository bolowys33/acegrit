"use client";

import BlogSection from "@/components/BlogSection";
import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import Social from "@/components/Social";
import usePosts, { Post } from "@/hooks/usePosts";
import { ButtonGroup, Container } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";

const BlogPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);

    const page = searchParams.get("page")
        ? parseInt(searchParams.get("page")!, 10)
        : 1;
    const { posts, isFetching, error, pagination, getPosts } = usePosts(page);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("page", newPage.toString());
        router.push(`?${newSearchParams.toString()}`);
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
                        <div className="flex justify-center my-16">
                            <ButtonGroup
                                variant="outlined"
                                aria-label="pagination"
                                className="border border-navy">
                                <button
                                    type="button"
                                    className={`font-bold px-3 uppercase ${
                                        currentPage === 1
                                            ? "cursor-not-allowed bg-gray text-navy hover:bg-gray-400"
                                            : "cursor-pointer bg-navy text-white hover:bg-[#202057]"
                                    }`}
                                    disabled={currentPage === 1}
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }>
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    className="text-navy border-x px-3 font-main font-bold text-3xl"
                                    disabled>
                                    {currentPage}
                                </button>
                                <button
                                    type="button"
                                    className={`font-bold px-3 uppercase ${
                                        currentPage === pagination.totalPages
                                            ? "cursor-not-allowed bg-gray text-navy hover:bg-gray-400"
                                            : "cursor-pointer bg-navy text-white hover:bg-[#202057]"
                                    }`}
                                    disabled={
                                        currentPage === pagination.totalPages
                                    }
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }>
                                    next
                                </button>
                            </ButtonGroup>
                        </div>
                    )}
                </div>
            </Container>
            <Social classes="bg-zinc-200" />
        </div>
    );
};

export default BlogPage;
