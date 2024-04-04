import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { practiceAreas } from "@/constants/links";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import commercial from "@/public/assets/commercial.jpg";
import litigation from "@/public/assets/litigation.jpg";
import conflict from "@/public/assets/conflict.jpg";
import probate from "@/public/assets/probate.jpg";
import PracticeAreas from "../page";

interface Areas {
    area: string;
}

const Area = ({ params }: { params: Areas }) => {
    const { area } = params;
    const link = practiceAreas.find((item) => item.path === `/${area}`);
    const images = [litigation, probate, commercial, conflict];
    const linkAreas = practiceAreas.filter((item) => item.path !== `/${area}`);
    const filteredIndex = practiceAreas.findIndex(
        (item) => item.path === `/${area}`
    );

    if (filteredIndex !== -1) {
        images.splice(filteredIndex, 1);
    }

    return (
        <div>
            <PageBanner title={link?.name} classes={`${area}-image`} />
            <Container maxWidth="xl">
                <div className="md:px-5">
                    <SectionTitle
                        section="practice area"
                        classes="text-center"
                    />
                    <h3 className="text-[29px] md:text-[34px] font-extrabold text-center tracking-[1.5px] mb-8">
                        {link?.name}
                    </h3>
                    <Container
                        maxWidth="md"
                        className="font-poppins text-justify font-medium text-zinc-700 mb-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quibusdam delectus, facere quod
                            tempora inventore dolores culpa saepe, non
                            reiciendis doloremque dolore consequuntur nobis,
                            blanditiis nulla. Quam sint ullam voluptatibus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quibusdam delectus, facere quod
                            tempora inventore dolores culpa saepe, non
                            reiciendis doloremque dolore consequuntur nobis,
                            blanditiis nulla. Quam sint ullam voluptatibus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quibusdam delectus, facere quod
                            tempora inventore dolores culpa saepe, non
                            reiciendis doloremque dolore consequuntur nobis,
                            blanditiis nulla. Quam sint ullam voluptatibus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quibusdam delectus, facere quod
                            tempora inventore dolores culpa saepe, non
                            reiciendis doloremque dolore consequuntur nobis,
                            blanditiis nulla. Quam sint ullam voluptatibus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quibusdam delectus, facere quod
                            tempora inventore dolores culpa saepe, non
                            reiciendis doloremque dolore consequuntur nobis,
                            blanditiis nulla. Quam sint ullam voluptatibus?
                        </p>
                    </Container>
                    <div className="">
                        <div className="text-center mb-6">
                            <SectionTitle section="practice areas" />
                            <h3 className="text-[29px] md:text-[34px] font-extrabold mb-3">
                                Other Practice Areas
                            </h3>
                            <span className="text-2xl text-[#222261]">|</span>
                        </div>
                        <div className="flex flex-col md:flex-row  gap-4 p-10 bg-zinc-200">
                            {linkAreas.map((area, index) => (
                                <div
                                    key={area.path}
                                    className="bg-white shadow-lg rounded-md p-3 col-span-full md:col-span-6 lg:col-span-3">
                                    <Link href={area.path} className="relative">
                                        <Image
                                            src={images[index]}
                                            alt="area.name"
                                            height={700}
                                        />
                                        <div className="bg-tansparent w-full h-full absolute top-0 hover:bg-black hover:bg-opacity-40 transition duration-700 ease-in-out"></div>
                                    </Link>
                                    <SectionTitle
                                        section={area.name}
                                        classes="text-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Area;
