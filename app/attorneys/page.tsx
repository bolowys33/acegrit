import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";

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
            </Container>
        </div>
    );
};

export default Attorneys;
