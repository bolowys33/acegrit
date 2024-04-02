import PageBanner from "@/components/PageBanner";
import { Container } from "@mui/material";

const Contact = () => {
    return (
        <div>
            <PageBanner title="Contact Us" classes="contact-image" />
            <Container maxWidth="xl">
                <div>
                    <h3 className="text-center">Get in touch with us</h3>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div></div>
                </div>
            </Container>
            <form action=""></form>
        </div>
    );
};

export default Contact;
