interface NavLink {
    name: string;
    path: string;
}

export const links: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
];

export const links2: NavLink[] = [
    { name: "Attorneys", path: "/attorneys" },
    { name: "Legal Blog", path: "/legal-blog" },
    { name: "Contact", path: "/contact" },
];

export const practiceAreas: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Practice Areas", path: "/practice-areas" },
    { name: "Attorneys", path: "/attorneys" },
    { name: "Legal Blog", path: "/legal-blog" },
    { name: "Contact", path: "/contact" },
];
