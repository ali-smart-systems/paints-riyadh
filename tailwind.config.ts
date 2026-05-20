import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                brand: {
                    primary: "#0f172a",
                    accent: "#e63946",
                    success: "#22c55e",
                    gold: "#b45309",
                },
            },
            fontFamily: {
                sans: ["Tajawal", "system-ui"],
            },
            boxShadow: {
                soft: "0 10px 25px rgba(0,0,0,0.05)",
                strong: "0 20px 40px rgba(0,0,0,0.15)",
            },
        },
    },
    plugins: [],
};

export default config;