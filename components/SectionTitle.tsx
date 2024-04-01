import { FC } from "react";

interface SectionTitleProps {
    section: string;
    classes: string
}

const SectionTitle: FC<SectionTitleProps> = ({ section, classes }) => {
    return (
        <div className={`py-2 ${classes}`}>
            <span className="tracking-[2px] mb-3 uppercase text-[#222261] text-[13px] font-extrabold">
                {section}
            </span>
        </div>
    );
};

export default SectionTitle;
