import { links, practiceAreas } from "@/constants/links";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#060633]">
            <div className=" py-8 px-8 md:pl-16 md:pr-32 md:py-12 text-white">
                <div className="flex flex-col md:flex-row md:items-center ">
                    <div>
                        <Image src={logo} alt="brand logo" width={250} />
                    </div>
                    <div className="flex flex-col md:flex-row space-y-7 md:space-y-0 md:space-x-8 md:justify-between md:pl-40 lg:mr-20">
                        <div className="md:w-[40%]">
                            <h2 className="font-main text-xl md:text-2xl font-bold">
                                Contact Details
                            </h2>
                            <p className="my-6">
                                Address: Emi Abata, near Gateway Baptist Church,
                                Sango sawmill road, Sango Ibadan North Local
                                Government Area, 200285, Ibadan
                            </p>
                            <p className="">Number : +2347039395019</p>
                            <p className="">Email: soabayomi2013@gmail.com</p>
                            <p></p>
                        </div>
                        <div className="md:w-[157px]">
                            <h2 className="font-main text-xl md:text-2xl font-bold mb-6">
                                Practice Areas
                            </h2>
                            <ul>
                                {practiceAreas.map((link) => (
                                    <li key={link.path}>
                                        <Link href={`/practice-areas${link.path}`}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-[132px]">
                            <h2 className="font-main text-xl md:text-2xl font-bold mb-6">
                                Quick Links
                            </h2>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.path}>
                                        <Link href={link.path}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between mt-8 py-6 border-t border-gray md:flex-row md:justify-between md:items-center md:px-14 ">
                <p>copyrighrt</p>
                <p>social links</p>
                <p>designe by</p>
            </div>
        </div>
    );
};

export default Footer;
