import { FC, ReactNode } from "react";

interface SlideProps {
    title?: string;
    classes: string;
    children?: ReactNode;
}

const Slide: FC<SlideProps> = ({ title, classes, children }) => {
    return (
        <div className={`md:h-[80vh] bg-cover bg-center text-center text-white ${classes}`}>
            <div className="bg-black bg-opacity-50 hover:bg-opacity-70 pt-[70px] pb-[50px] md:py-[100px] h-full">
                <h1 className="font-main font-bold text-4xl md:text-[75px]">
                    {title}
                </h1>
                {children && (
          <div className="mt-8 md:mt-12">{children}</div>
        )}
            </div>
        </div>
    );
};

export default Slide;
