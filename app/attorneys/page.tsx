"use client"

import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";
import Image from "next/image";
import Social from "@/components/Social";
import useAttorneys from "@/hooks/useAttorneys";
import { PropagateLoader } from "react-spinners";

const Attorneys = () => {
    const { attorneys, isFetching, error } = useAttorneys();

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
        <div>
            <PageBanner title="Attorneys" classes="people-image" />
            <Container maxWidth="lg">
                <div className="text-center mb-8">
                    <SectionTitle section="Our team" />
                    <h3 className="text-[29px] md:text-[34px] font-extrabold mb-3">
                        Meet our team
                    </h3>
                </div>
                <div className="grid grid-cols-12 md:gap-6 lg:gap-10">
                    {attorneys?.map((attorney) => (
                        <div className="text-center mb-6 col-span-12 md:col-span-6">
                            <Image
                                src={attorney.image_url}
                                width={300}
                                height={300}
                                alt={attorney.name}
                                className="w-[350px] mx-auto mb-5"
                            />
                            <h3 className="text-[26px] md:text-[30px] font-extrabold leading-3">
                                {attorney.name}
                            </h3>
                            <SectionTitle section={attorney.position} />
                        </div>
                    ))}
                </div>
            </Container>
            <Social classes="bg-zinc-200" />
        </div>
    );
};

export default Attorneys;
