import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                main: '"Cormorant Garamond", serif',
                poppings: '"Poppins", sans-serif',
            },
            colors: {
                navy: "#000080",
                gold: "#FFD700",
                gray: "#D3D3D3",
            },
        },
    },
    plugins: [],
};
export default config;
