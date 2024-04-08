import Image from "next/image";
import logo from "@/public/assets/logo.png";

const About = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-5">
                <div className="flex-1 space-y-5">
                    <h3 className="text-[29px] md:text-[34px] text-start font-extrabold ">
                        About us
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati, voluptatem dolor veniam commodi suscipit
                        quibusdam soluta voluptas doloribus nam facere
                        recusandae, repellat aperiam quaerat? Voluptatum at
                        ipsum consectetur unde quas. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Accusantium eum quas iure
                        impedit ea eaque quaerat quod molestiae nostrum, cumque
                        provident. Perferendis molestiae pariatur fuga corporis
                        quos delectus numquam iste!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Porro repudiandae expedita sapiente, officiis
                        possimus pariatur velit quis non maxime, error, nam
                        magnam dignissimos in ipsa dolorem totam. Impedit, optio
                        velit.
                    </p>
                </div>
                <div className="flex-1 bg-gold">
                    <Image src={logo} alt="" className="mx-auto md:my-9" />
                </div>
            </div>
        </div>
    );
};

export default About;
