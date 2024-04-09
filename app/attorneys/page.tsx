import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";
import Image from "next/image";
import litigation from "@/public/assets/litigation.jpg"
import Social from "@/components/Social";

const Attorneys = () => {
    return (
        <div>
            <PageBanner title="Attorneys" classes="people-image" />
            <Container maxWidth="md">
                <div className="text-center">
                    <SectionTitle section="Our team" />
                    <h3 className="text-[29px] md:text-[34px] font-extrabold mb-3">
                        Meet our team
                    </h3>
                </div>
               <div>
               <div className="text-center mb-6">
                    <Image src={litigation} alt="" className="w-[700px] mx-auto mb-5" />
                    <h3 className="text-[26px] md:text-[30px] font-extrabold leading-3">
                        Babajide Bolodeoku
                    </h3>
                    <SectionTitle section="managing partner" />
                </div>
                <div className="text-center mb-6">
                    <Image src={litigation} alt="" className="w-[700px] mx-auto mb-5" />
                    <h3 className="text-[26px] md:text-[30px] font-extrabold leading-3">
                        Olalekan Adeoye
                    </h3>
                    <SectionTitle section="managing partner" />
                </div>
               </div>
            </Container>
            <Social classes="bg-zinc-200" />
        </div>
    );
};

export default Attorneys;
