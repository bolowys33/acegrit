import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";

const PracticeAreas = () => {
    return ( <div>
            <PageBanner title="Practice Areas" classes="area-image" />
            <Container maxWidth="xl">
                <SectionTitle section="practice areas" classes="" />
            </Container>
        </div> );
}
 
export default PracticeAreas;