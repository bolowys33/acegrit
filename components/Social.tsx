import { Email, Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import Link from "next/link";

const Social = () => {
    return (
        <div className="flex justify-center gap-5 text-zinc-700 py-14 ">
            <Link href={'/contact-us/#'}>
                <Facebook />
            </Link>
            <Link href={'/contact-us/#'}>
                <Instagram />
            </Link>
            <Link href={'/contact-us/#'}>
                <X />
            </Link>
            <Link href={'/contact-us/#'}>
                <LinkedIn />
            </Link>
            <Link href={'/contact-us/#'}>
                <Email />
            </Link>
        </div>
    );
};

export default Social;
