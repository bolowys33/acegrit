import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";
import Image from "next/image";
import litigation from "@/public/assets/litigation.jpg"

const Attorneys = () => {
    return (
        <div>
            <PageBanner title="Attorneys" classes="people-image" />
            <Container>
                <div className="mx-auto text-center">
                    <SectionTitle section="Our team" />
                    <h3 className="text-[29px] md:text-[34px] font-extrabold mb-3">
                        Meet our team
                    </h3>
                </div>
                <div>
                    <Image src={litigation} alt="" className="w-[700px]" />
                    <SectionTitle section="Bolodeoku babajide" />
                    <SectionTitle section="managing partner" />
                </div>
            </Container>
        </div>
    );
};

export default Attorneys;
