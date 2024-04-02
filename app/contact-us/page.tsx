import PageBanner from "@/components/PageBanner";
import Social from "@/components/Social";
import { AccessTimeOutlined, LocationOnOutlined, PermPhoneMsgOutlined } from "@mui/icons-material";
import { Container } from "@mui/material";

const Contact = () => {
    return (
        <div>
            <PageBanner title="Contact Us" classes="contact-image" />
            <Container maxWidth="lg">
                <div className="md:px-6">
                <h3 className="text-[29px] text-[#222261] text-center font-extrabold mb-3">Get in touch with us</h3>
                    <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between border-y border-gold text-center py-10">
                        <div>
                            <PermPhoneMsgOutlined className="text-[#222261] text-[45px] mb-4" />
                            <span>
                                <p>Tel: +234111111111</p>
                                <p>Email: email@email.com</p>
                            </span>
                        </div>
                        <div>
                            <LocationOnOutlined className="text-[#222261] text-[45px] mb-4"/>
                            <span >
                                <p>Tel: +234111111111</p>
                                <p>Email: email@email.com</p>
                            </span>
                        </div>
                        <div>
                            <AccessTimeOutlined className="text-[#222261] text-[45px] mb-4"/>
                            <span>
                                <p>Tel: +234111111111</p>
                                <p>Email: email@email.com</p>
                            </span>
                        </div>
                    </div>
                    <Social />
                </div>
            </Container>
            <form action=""></form>
        </div>
    );
};

export default Contact;
