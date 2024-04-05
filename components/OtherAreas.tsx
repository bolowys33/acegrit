import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { practiceAreas } from "@/constants/links";
import { FC } from "react";
import commercial from "@/public/assets/commercial.jpg";
import litigation from "@/public/assets/litigation.jpg";
import conflict from "@/public/assets/conflict.jpg";
import probate from "@/public/assets/probate.jpg";

interface OtherAreasProps {
    area?: string;
}

const OtherAreas: FC<OtherAreasProps> = ({ area }) => {
    const images = [litigation, probate, commercial, conflict];
    const linkAreas = practiceAreas.filter((item) => item.path !== `/${area}`);
    const filteredIndex = practiceAreas.findIndex(
        (item) => item.path === `/${area}`
    );

    if (filteredIndex !== -1) {
        images.splice(filteredIndex, 1);
    }

    return (
        <div className="">
            <div className="text-center my-6">
                <SectionTitle section=" other practice areas" />
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
    );
};

export default OtherAreas;
