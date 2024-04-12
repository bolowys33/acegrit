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
    { name: "General Litigation", path: "/general-litigation" },
    { name: "Probate and Wills", path: "/probate-and-wills" },
    { name: "Commercial & Corporate Practice", path: "/commercial-coorparate" },
    { name: "Company Secretariat Duties", path: "/company-secretariat-duties" },
    { name: "Dispute Resolution", path: "/dispute-resolution" },
];
