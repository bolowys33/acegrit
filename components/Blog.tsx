import { Container } from "@mui/material";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const Blog = () => {
    return (
        <div>
            <Container maxWidth="xl">
                <div className="my-8 md:pl-20 md:w-[85%] flex flex-col">
                    <h3 className="text-[29px] md:text-[34px] text-start font-extrabold tracking-[1.5px]">
                        Publications
                    </h3>
                    <p className="tracking-[.5px] font-[500] text-zinc-400 my-6">
                        Our articles from the desk, aim to keep you updated with
                        current legislations, policies, pronouncements and
                        events within the legal space in Africa.
                    </p>
                    <section className="space-y-16 mb-10">
                        <article>
                            <div className="flex">
                                <div className="py-0 pr-4 border-r-2 h-14 border-navy tracking-[2px] hidden md:block">
                                    <p className="font-semibold">APR</p>
                                    <p className="text-[27px] font-extrabold leading-5 mt-1 ">
                                        29
                                    </p>
                                </div>
                                <div className="md:pl-4">
                                    <Link
                                        href={"#"}
                                        className="text-[32px] md:text-[37px] text-start font-extrabold tracking-[1.5px] leading-[44px] hover:text-navy">
                                        Immovable Assets as Securities; The New
                                        Era
                                    </Link>
                                </div>
                            </div>
                            <p className="text-zinc-400 my-6">
                                Our update pages attempts to keep you abreast
                                with current legislations, policies,
                                pronouncements and events...
                            </p>
                            <Link
                                href={"#"}
                                className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                                read more
                            </Link>
                        </article>
                        <article>
                            <div className="flex">
                                <div className="py-0 pr-4 border-r-2 h-14 border-navy tracking-[2px] hidden md:block">
                                    <p className="font-semibold">APR</p>
                                    <p className="text-[27px] font-extrabold leading-5 mt-1 ">
                                        29
                                    </p>
                                </div>
                                <div className="md:pl-4">
                                    <Link
                                        href={"#"}
                                        className="text-[32px] md:text-[37px] text-start font-extrabold tracking-[1.5px] leading-[44px] hover:text-navy">
                                        Immovable Assets as Securities; The New
                                        Era
                                    </Link>
                                </div>
                            </div>
                            <p className="text-zinc-400 my-6">
                                Our update pages attempts to keep you abreast
                                with current legislations, policies,
                                pronouncements and events...
                            </p>
                            <Link
                                href={"#"}
                                className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                                read more
                            </Link>
                        </article>
                        <article>
                            <div className="flex">
                                <div className="py-0 pr-4 border-r-2 h-14 border-navy tracking-[2px] hidden md:block">
                                    <p className="font-semibold">APR</p>
                                    <p className="text-[27px] font-extrabold leading-5 mt-1 ">
                                        29
                                    </p>
                                </div>
                                <div className="md:pl-4">
                                    <Link
                                        href={"#"}
                                        className="text-[32px] md:text-[37px] text-start font-extrabold tracking-[1.5px] leading-[44px] hover:text-navy">
                                        Immovable Assets as Securities; The New
                                        Era
                                    </Link>
                                </div>
                            </div>
                            <p className="text-zinc-400 my-6">
                                Our update pages attempts to keep you abreast
                                with current legislations, policies,
                                pronouncements and events...
                            </p>
                            <Link
                                href={"#"}
                                className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                                read more
                            </Link>
                        </article>
                    </section>
                    <Link
                        href={"/legal-blog"}
                        className="self-center text-[20px] transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                        view all
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
