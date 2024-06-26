import { Email, Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import Link from "next/link";
import { FC } from "react";

interface SocialProps {
    classes?: string;
}

const Social: FC<SocialProps> = ({ classes }) => {
    return (
        <div
            className={`flex justify-center gap-5 text-zinc-700 py-14 ${classes}`}>
            <Link href={"#"} className="hover:text-[#222261]">
                <Facebook />
            </Link>
            <Link href={"#"} className="hover:text-[#222261]">
                <Instagram />
            </Link>
            <Link href={"#"} className="hover:text-[#222261]">
                <X />
            </Link>
            <Link href={"#"} className="hover:text-[#222261]">
                <LinkedIn />
            </Link>
            <Link href={"#"} className="hover:text-[#222261]">
                <Email />
            </Link>
        </div>
    );
};

export default Social;
