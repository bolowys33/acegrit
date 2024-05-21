"use client";

import usePosts from "@/hooks/usePosts";
import { Container } from "@mui/material";
import Link from "next/link";

const Blog = () => {
    const { posts, isFetching, error } = usePosts();

    if (isFetching) return null; // You can replace this with a loading spinner

    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    if (!posts || posts.length === 0) {
        return <div>No posts found.</div>;
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        const formattedDate = date.toLocaleDateString("en-US", options);
        return formattedDate.replace(",", "").split(" ");
    };

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
                <section className="space-y-16 mb-10">
                    {posts.map((post) => {
                        const [month, day, year] = formatDate(
                            post.date_created
                        );
                        return (
                            <article key={post._id}>
                                <div className="flex">
                                    <div className="py-0 pr-4 border-r-2 h-18 border-navy tracking-[2px] hidden md:block">
                                        <div className="flex flex-col items-center">
                                            <p className="font-semibold uppercase">
                                                {month}
                                            </p>
                                            <p className="text-[27px] font-extrabold leading-5 my-1">
                                                {day}
                                            </p>
                                            <p className="font-semibold">
                                                {year}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:pl-4">
                                        <Link
                                            href="#"
                                            className="text-[24px] md:text-[28px] text-start font-extrabold hover:text-navy">
                                            {post.title}
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="text-zinc-400 my-6"
                                    dangerouslySetInnerHTML={{
                                        __html: `${post.content
                                            .split(" ")
                                            .slice(0, 15)
                                            .join(" ")}...`,
                                    }}
                                />
                                <Link
                                    href={`/legal-blog/${post.post_url}`}
                                    className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                                    read more
                                </Link>
                            </article>
                        );
                    })}
                </section>
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
