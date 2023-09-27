/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    screens: {
        md: "768px",
        lg: "1024px",
        xl: "1536px",
    },
    theme: {
        letterSpacing: {
            tightest: "-.07em",
            tighter: "-.05em",
            tight: "-.0275em",
            normal: "0",
            wide: ".025em",
            wider: ".05em",
            widest: ".15em",
        },
        animation: {
            "spin-slow": "spin 20s linear infinite",
        },
        keyframes: {
            spin: {
                "0%, ": { rotate: "0deg" },
                "50%": { scale: "1 1.5" },
                "100%": { rotate: "360deg" },
            },
        },

        extend: {
            // pallet color: https://coolors.co/08090a-a7a2a9-f4f7f5-575a5e-222823
            colors: {
                "vampire-black": "#08090A",
                "quick-silver": "#A7A2A9",
                seasalt: "#F4F7F5",
                "davy-gray": "#575A5E",
                "eerie-black": "#222823",
            },
            gridTemplateRows: {
                7: "repeat(7, minmax(0, 1fr))",
                8: "repeat(8, minmax(0, 1fr))",
                9: "repeat(9, minmax(0, 1fr))",
                10: "repeat(10, minmax(0, 1fr))",
                11: "repeat(11, minmax(0, 1fr))",
                12: "repeat(12, minmax(0, 1fr))",
            },
            fontFamily: {
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
                titillium: ["Titillium Web", ...defaultTheme.fontFamily.sans],
                acumin: ["Acumin Pro", ...defaultTheme.fontFamily.sans],
                "acumin-condensed": [
                    "Acumin Pro Condensed",
                    ...defaultTheme.fontFamily.sans,
                ],
                baskerville: ["Baskerville", ...defaultTheme.fontFamily.sans],
            },
            borderRadius: {
                10: "10px",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "scale(1)" },
                    "30%": { transform: "scale(1.1)" },
                    "69%": { transform: "scale(0.9)" },
                },
            },
            animation: {
                wiggle: "wiggle 0.5s cubic-bezier(0.25, 0.4, 0.55, 1.4)",
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities, theme, addComponents }) {
            addUtilities({
                ".big-title": {
                    fontSize: "calc(19vw - 3.8px)",
                    lineHeight: 1,
                    fontWeight: 600,
                    letterSpacing: theme("letterSpacing.tightest"),
                    whiteSpace: "nowrap",

                    "@screen md": {
                        fontSize: "calc(19vw - 6.65px)",
                    },
                    "@screen lg": {
                        fontSize: "190px",
                    },
                },
                ".medium-title": {
                    fontSize: "40px",
                    lineHeight: 1,
                    fontWeight: 600,
                    letterSpacing: theme("letterSpacing.tight"),

                    "@screen md": {
                        fontSize: "70px",
                    },
                    "@screen lg": {
                        fontSize: "90px",
                    },
                },
                ".small-title": {
                    fontSize: "26px",
                    lineHeight: 1.1,
                    fontWeight: 600,
                    letterSpacing: theme("letterSpacing.tight"),

                    "@screen md": {
                        fontSize: "40px",
                        lineHeight: 1,
                    },
                    "@screen lg": {
                        fontSize: "50px",
                    },
                },
                ".tiny-title": {
                    fontSize: ".80952381em",
                    lineHeight: 1.5,
                    fontWeight: 600,
                    letterSpacing: theme("letterSpacing.widest"),
                    fontFamily: "Acumin Pro Condensed",
                },
                ".text-balance": {
                    textWrap: "balance",
                },
            })

            addComponents({
                ".container": {
                    maxWidth: "100%",
                    width: "100%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    "@screen md": {
                        maxWidth: "1170px",
                        paddingLeft: "35px",
                        paddingRight: "35px",
                    },
                    "@screen lg": {
                        maxWidth: "1200px",
                        paddingLeft: "50px",
                        paddingRight: "50px",
                    },
                },
                ".min-32-max-50": {
                    fontSize: "clamp(2rem, 1.6556rem + 1.5306vw, 3.125rem)",
                    lineHeight: 1.2,
                },
                ".min-24-max-32": {
                    fontSize: "clamp(1.5rem, 1.3469rem + 0.6803vw, 2rem)",
                    lineHeight: 1.5,
                },
            })
        }),
    ],
}
