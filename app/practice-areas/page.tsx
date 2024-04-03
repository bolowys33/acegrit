import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";
import commercial from "@/public/assets/commercial.jpg";
import litigation from "@/public/assets/litigation.jpg";
import conflict from "@/public/assets/conflict.jpg";
import probate from "@/public/assets/probate.jpg";
import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/constants/links";
import Social from "@/components/Social";

const PracticeAreas = () => {
    const images = [litigation, probate, commercial, conflict];

    return (
        <div>
            <PageBanner title="Practice Areas" classes="area-image" />
            <Container maxWidth="xl">
                <div className="md:px-5 mb-6">
                    <SectionTitle
                        section="practice areas"
                        classes="text-center"
                    />
                    <h3 className="text-[30px] md:text-[40px] text-center font-extrabold tracking-[1.5px] mb-8">
                        What we are expert at
                    </h3>
                    <Container maxWidth="lg" className="space-y-12 md:space-y-8">
                        {practiceAreas.map((area, index) => (
                            <article
                                key={area.path}
                                className="flex flex-col md:flex-row md:pt-10 justify-between gap-8">
                                <div className="flex-1">
                                    <Image src={images[index]} alt="" />
                                </div>
                                <div className="flex-1 lg:py-10">
                                    <h5 className="text-[24px] md:text-[30px] text-start font-extrabold">
                                        {area.name}
                                    </h5>
                                    <p className="text-zinc-400 mt-4 mb-6 md:my-4 lg:my-6">
                                        Our update pages attempts to keep you
                                        abreast with current legislations,
                                        policies, pronouncements and events...
                                    </p>
                                    <Link
                                        href={area.path}
                                        className="transition duration-300 ease-in-out bg-navy hover:bg-transparent hover:text-navy hover:border-navy border text-white py-2 px-4 font-semibold uppercase">
                                        learn more
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </Container>
                </div>
            </Container>
            <Social classes="bg-zinc-200" />
        </div>
    );
};

export default PracticeAreas;
