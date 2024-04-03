import PageBanner from "@/components/PageBanner";
import SectionTitle from "@/components/SectionTitle";
import { Container } from "@mui/material";
import Image from "next/image";
import logo from "@/public/assets/logo.png";
import MissionBanner from "@/components/MissionBanner";
import Expertise from "@/components/Expertise";

const About = () => {
    return (
        <div>
            <PageBanner title="About Us" classes="about-image" />
            <Container maxWidth="xl">
                <div className="md:px-5">
                    <SectionTitle section="about us" classes="" />
                    <div className="font-poppins text-justify font-medium text-zinc-700">
                        <div className="flex flex-col md:flex-row justify-between gap-8 mb-5">
                            <div className="flex-1 space-y-5">
                                <h3 className="text-[29px] md:text-[34px] text-start font-extrabold ">
                                    Ace & Grit Legal Practitioners
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati, voluptatem
                                    dolor veniam commodi suscipit quibusdam
                                    soluta voluptas doloribus nam facere
                                    recusandae, repellat aperiam quaerat?
                                    Voluptatum at ipsum consectetur unde quas.
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Accusantium eum quas iure
                                    impedit ea eaque quaerat quod molestiae
                                    nostrum, cumque provident. Perferendis
                                    molestiae pariatur fuga corporis quos
                                    delectus numquam iste!
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Porro repudiandae expedita
                                    sapiente, officiis possimus pariatur velit
                                    quis non maxime, error, nam magnam
                                    dignissimos in ipsa dolorem totam. Impedit,
                                    optio velit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Porro repudiandae expedita
                                    sapiente, officiis possimus pariatur velit
                                    quis non maxime, error, nam magnam
                                    dignissimos in ipsa dolorem totam. Impedit,
                                    optio velit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Porro repudiandae expedita
                                    sapiente, officiis possimus pariatur velit
                                    quis non maxime, error, nam magnam
                                    dignissimos in ipsa dolorem totam. Impedit,
                                    optio velit.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Porro repudiandae expedita
                                    sapiente, officiis possimus pariatur velit
                                    quis non maxime, error, nam magnam
                                    dignissimos in ipsa dolorem totam. Impedit,
                                    optio velit.
                                </p>
                            </div>
                            <div className="flex-1 bg-gold">
                                <Image
                                    src={logo}
                                    alt=""
                                    className="mx-auto md:my-9"
                                />
                            </div>
                        </div>
                        <div className="space-y-5">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Obcaecati, voluptatem dolor
                                veniam commodi suscipit quibusdam soluta
                                voluptas doloribus nam facere recusandae,
                                repellat aperiam quaerat? Voluptatum at ipsum
                                consectetur unde quas. Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Accusantium
                                eum quas iure impedit ea eaque quaerat quod
                                molestiae nostrum, cumque provident. Perferendis
                                molestiae pariatur fuga corporis quos delectus
                                numquam iste!
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Porro repudiandae expedita
                                sapiente, officiis possimus pariatur velit quis
                                non maxime, error, nam magnam dignissimos in
                                ipsa dolorem totam. Impedit, optio velit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Porro repudiandae expedita
                                sapiente, officiis possimus pariatur velit quis
                                non maxime, error, nam magnam dignissimos in
                                ipsa dolorem totam. Impedit, optio velit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Porro repudiandae expedita
                                sapiente, officiis possimus pariatur velit quis
                                non maxime, error, nam magnam dignissimos in
                                ipsa dolorem totam. Impedit, optio velit.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Porro repudiandae expedita
                                sapiente, officiis possimus pariatur velit quis
                                non maxime, error, nam magnam dignissimos in
                                ipsa dolorem totam. Impedit, optio velit.
                            </p>
                        </div>
                    </div>
                    <MissionBanner />
                </div>
            </Container>
                <Expertise />
        </div>
    );
};

export default About;
