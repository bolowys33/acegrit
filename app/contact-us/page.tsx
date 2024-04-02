import PageBanner from "@/components/PageBanner";
import Social from "@/components/Social";
import {
    AccessTimeOutlined,
    LocationOnOutlined,
    PermPhoneMsgOutlined,
} from "@mui/icons-material";
import { Box, Container, TextField, TextareaAutosize } from "@mui/material";

const Contact = () => {
    return (
        <div>
            <PageBanner title="Contact Us" classes="contact-image" />
            <Container maxWidth="lg">
                <div className="md:px-6">
                    <h3 className="text-[29px] text-center font-extrabold mb-3">
                        Get in touch with us
                    </h3>
                    <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between border-y border-gold text-center py-10">
                        <div>
                            <PermPhoneMsgOutlined className="text-[#222261] text-[45px] mb-4" />
                            <span>
                                <p>Tel: +234111111111</p>
                                <p>Email: email@email.com</p>
                            </span>
                        </div>
                        <div>
                            <LocationOnOutlined className="text-[#222261] text-[45px] mb-4" />
                            <span>
                                <p>Tel: +234111111111</p>
                                <p>Email: email@email.com</p>
                            </span>
                        </div>
                        <div>
                            <AccessTimeOutlined className="text-[#222261] text-[45px] mb-4" />
                            <span>
                                <p>Tel: +234111111111</p>
                                <p>Email: email@email.com</p>
                            </span>
                        </div>
                    </div>
                    <Social />
                </div>
            </Container>
            <div className="bg-gray">
                <Container maxWidth="sm">
                    <Box>
                        <form action="">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Email Address"
                                type="email"
                                autoFocus={false}
                                className="mb-4 text-gray-700 rounded bg-white"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-basic"
                                label="Full Name"
                                type="text"
                                autoFocus={false}
                                className="mb-4 text-gray-700 rounded bg-white outline-none"
                            />
                            <TextareaAutosize
                                minRows={7}
                                maxRows={9}
                                required
                                id="outlined-basic"
                                placeholder="Your message"
                                className="w-full"
                            />
                        </form>
                    </Box>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
