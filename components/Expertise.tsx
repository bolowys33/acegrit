import Link from "next/link";
import { practiceAreas } from "@/constants/links";
import SectionTitle from "./SectionTitle";
import commercial from "@/public/assets/commercial.jpg";
import litigation from "@/public/assets/litigation.jpg";
import conflict from "@/public/assets/conflict.jpg";
import probate from "@/public/assets/probate.jpg";
import Image from "next/image";

const Expertise = () => {
    const images = [litigation, probate, commercial, conflict, conflict];

    return (
        <div className="">
            <div className="text-center mb-6">
                <SectionTitle section="what we do" />
                <h3 className="text-[29px] md:text-[34px] font-extrabold mb-3">
                    Practice Areas
                </h3>
                <span className="text-2xl text-[#222261]">|</span>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 p-10 bg-zinc-200">
                {practiceAreas.map((area, index) => (
                    <div key={area.path} className="bg-white md:w-1/3 lg:w-1/5 shadow-lg rounded-md p-3 col-span-full md:col-span-6 lg:col-span-3">
                        <Link href={`/practice-areas${area.path}`} className="relative">
                            <Image src={images[index]} alt="area.name" height={700}/>
                            <div className="bg-tansparent w-full h-full absolute top-0 hover:bg-black hover:bg-opacity-40 transition duration-700 ease-in-out"></div>
                        </Link>
                        <SectionTitle section={area.name} classes='text-center' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Expertise;
