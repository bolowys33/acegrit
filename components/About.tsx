import Image from "next/image";
import logo from "@/public/assets/logo.png";

const About = () => {
    return (
        <div className="bg-gray">
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-5 px-5 py-10 md:w-[85%] md:mx-auto md:px-0">
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
                </div>
                <div className="flex-1">
                    <Image src={logo} alt="" className="hidden md:block mx-auto md:my-2 h-30 w-[350px]" />
                </div>
            </div>
        </div>
    );
};

export default About;
