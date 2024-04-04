import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { practiceAreas } from "@/constants/links";
import { Container } from "@mui/material";

interface Areas {
    area: string;
}

const Area = ({ params }: { params: Areas }) => {
    const { area } = params;

    const link = practiceAreas.find((item) => item.path === `/${area}`);

    return (
        <div>
            <PageBanner title={link?.name} classes={`${area}-image`} />
            <Container maxWidth="xl">
                <div className="md:px-5">
                    <SectionTitle section="practice area" />
                    <h3 className="text-[29px] md:text-[34px] font-extrabold tracking-[1.5px] mb-8">
                        {link?.name}
                    </h3>
                </div>
            </Container>
        </div>
    );
};

export default Area;
