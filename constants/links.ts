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
    { name: "Contact", path: "/contact-us" },
];

export const practiceAreas: NavLink[] = [
    { name: "Litigation", path: "/litigatiton" },
    { name: "Probate Practice", path: "/probate-practice" },
    { name: "Commercial & Corporate Practice", path: "/commercial-coorparate" },
    { name: "Dispute Resolution", path: "/dispute-resolution" },
];
