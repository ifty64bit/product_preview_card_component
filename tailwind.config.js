/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    "dark-cyan": "hsl(158, 38%, 92%)",
                    cream: "hsl(30, 38%, 92%)",
                    "dark-blue": "hsl(212, 21%, 14%)",
                    "grayish-blue": "hsl(228, 12%, 48%)",
                    white: "hsl(0, 0%, 100%)",
                },
            },
            fontFamily: {
                //extand font family
                sans: ["Montserrat", "Fraunces", ...theme.fontFamily.sans],
                fraunces: ["Fraunces", ...theme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
