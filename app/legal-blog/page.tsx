import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";

const Blog = () => {
    return (
        <div>
            <PageBanner title="Legal Blog" classes="blog-image" />
            <Container maxWidth="xl">
                <div className="md:px-5">
                    <SectionTitle section="legal blog" classes="" />
                    <h3 className="text-[29px] md:text-[34px] text-start font-extrabold tracking-[1.5px]">
                        From the Desk
                    </h3>
                    <p className="tracking-[.5px] font-[500] text-zinc-400">Our update pages attempts to keep you abreast with current legislations, policies, pronouncements and events within the legal space in Africa.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
