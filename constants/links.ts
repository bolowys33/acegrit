interface NavLink {
    name: string;
    path: string;
    image: string;
}

export const links: NavLink[] = [
    { name: "Home", path: "/", image: "" },
    { name: "About", path: "/about", image: "" },
];

export const links2: NavLink[] = [
    { name: "Attorneys", path: "/attorneys", image: "" },
    { name: "Legal Blog", path: "/legal-blog", image: "" },
    { name: "Contact", path: "/contact", image: "" },
];

export const practiceAreas: NavLink[] = [
    { name: "Litigation", path: "/litigatiton", image: "litigation" },
    { name: "Probate Practice", path: "/probate-practice", image: "probate" },
    {
        name: "Commercial & Corporate Practice",
        path: "/commercial-coorparate",
        image: "commercial",
    },
    {
        name: "Dispute Resolution",
        path: "/dispute-resolution",
        image: "conflict",
    },
];
