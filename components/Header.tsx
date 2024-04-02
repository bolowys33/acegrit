"use client";
import Link from "next/link";
import { links, links2, practiceAreas } from "@/constants/links";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { Container } from "@mui/material";
import {
    Close,
    KeyboardArrowDown,
    KeyboardArrowRight,
    KeyboardArrowUp,
    Menu,
} from "@mui/icons-material";
import { useState } from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";


const Header = () => {
    const pathname = usePathname()

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [areaOpen, setAreaOpen] = useState<boolean>(false);
    const [showArea, setShowArea] = useState<boolean>(false);

    const handleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleArea = () => {
        setAreaOpen(!areaOpen);
    };

    const handleShowArea = () => {
        setShowArea(true);
    };

    const handleCloseArea = () => {
        setShowArea(false);
    };

    return (
        <header className="bg-white shadow relative z-50">
            <Container maxWidth="xl">
                <nav className="flex justify-between items-center px-4 py-4">
                    <div>
                        <Image src={logo} alt="brand logo" width={100} />
                    </div>
                    <ul className="lg:space-x-1 xl:space-x-4 hidden lg:flex items-center text-[16.5px] ">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className="link text-navy hover:border-b hover:border-navy ">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                onMouseEnter={handleShowArea}
                                onMouseLeave={handleCloseArea}
                                href={"/practic-areas"}
                                className="link relative text-navy hover:border-b hover:border-navy">
                                Practice Areas <KeyboardArrowDown />
                            </Link>
                            {showArea && (
                                <div
                                    onMouseEnter={handleShowArea}
                                    onMouseLeave={handleCloseArea}
                                    className="absolute mt-2 px-6 py-2 bg-white  text-navy">
                                    <ul className="space-y-5">
                                        {practiceAreas.map((area) => (
                                            <li key={area.path}>
                                                <Link href={`/practice-areas${area.path}`} className="link">
                                                    {area.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                        {links2.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className="link text-navy hover:border-b hover:border-navy ">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Button
                                title="request an appointment"
                                classes="ml-6 text-[14px]"
                            />
                        </li>
                    </ul>
                    <button
                        onClick={handleMenu}
                        type="button"
                        title="Menu Button"
                        className={`p-3 bg-navy text-white rounded lg:hidden ${
                            menuOpen ? "open" : ""
                        }`}>
                        <span className="transition-opacity duration-500">
                            {menuOpen ? <Close /> : <Menu />}
                        </span>
                    </button>
                </nav>
            </Container>
            {menuOpen && (
                <div
                    className={`absolute inset-y-0 left-0 bg-opacity-50 z-20 w-full transition-all duration-500 lg:hidden ${
                        menuOpen ? "translate-y-[130px]" : "-translate-y-0"
                    }`}>
                    <ul>
                        {links.map((link) => (
                            <li key={link.path}>
                                <div className="w-[full] text-navy border-t bg-white border-gray px-10 py-3">
                                    <Link
                                        href={link.path}
                                        onClick={handleMenu}
                                        className="py-2 ">
                                        {link.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                        <li>
                            <div className="w-[full] text-navy border-t bg-white border-gray px-10 py-3 flex justify-between">
                                <Link
                                    href={"/practic-areas"}
                                    onClick={handleMenu}
                                    className="py-2 ">
                                    Practice Areas
                                </Link>
                                <button
                                    onClick={handleArea}
                                    type="button"
                                    title="arrow"
                                    className="border px-2">
                                    {areaOpen ? (
                                        <KeyboardArrowUp />
                                    ) : (
                                        <KeyboardArrowDown />
                                    )}
                                </button>
                            </div>
                        </li>
                        <li>
                            {areaOpen && (
                                <ul>
                                    {practiceAreas.map((area) => (
                                        <li key={area.path}>
                                            <div className="w-[full] text-navy border-t bg-white border-gray px-10 py-3">
                                                <Link
                                                    href={area.path}
                                                    onClick={handleMenu}
                                                    className="px-4 py-2">
                                                    <KeyboardArrowRight />{" "}
                                                    {area.name}
                                                </Link>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        {links2.map((link) => (
                            <li key={link.path}>
                                <div className="w-[full] text-navy border-t bg-white border-gray px-10 py-3">
                                    <Link
                                        href={link.path}
                                        onClick={handleMenu}
                                        className="py-2">
                                        {link.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
