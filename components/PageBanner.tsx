import { FC } from "react";

interface PageBannerProps {
    title: string;
}

const PageBanner: FC<PageBannerProps> = ({ title }) => {
    return (
        <div className="bg-cover bg-center text-center mb-10 bg-image">
            <div className="bg-navy bg-opacity-40 py-[100px] md:py-[180px]">
                <h1 className="text-white font-main font-bold text-4xl md:text-[75px]">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default PageBanner;
