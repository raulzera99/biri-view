import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Tema Light
        light: {
          background: "#ffffff", // branco
          primary: {
            100: "#D6EFFF",
            200: "#ADDFFF",
            300: "#85CFFF",
            400: "#5CBFFF",
            500: "#007BFF", // cor principal
            600: "#0069D9",
            700: "#0057B3",
            800: "#00458D",
            900: "#003367",
          },
          secondary: "#6C757D", // tons intermediários, como cinza
          accent: "#E0E0E0", // cor de destaque, como um tom mais claro
        },
        // Tema Dark
        dark: {
          background: "#1F1F1F", // preto
          primary: {
            100: "#E6E0F8",
            200: "#C4B3F1",
            300: "#A186EA",
            400: "#7F59E3",
            500: "#6A0DAD", // cor principal
            600: "#5A0A8F",
            700: "#4A0771",
            800: "#3A0553",
            900: "#2A0335",
          },
          secondary: "#CCCCCC", // cinza claro para detalhes
          accent: "#FFFFFF", // branco para contrastes
        },
        gray: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
          400: "#CED4DA",
          500: "#ADB5BD",
          600: "#868E96",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
        purple: {
          100: "#F3E8FF",
          200: "#E6D1FF",
          300: "#D9B9FF",
          400: "#CDA2FF",
          500: "#C285FF",
          600: "#B86FFF",
          700: "#AE59FF",
          800: "#A445FF",
          900: "#9A30FF",
        },
        destructive: {
          100: "#F8D7DA",
          200: "#F1AFB5",
          300: "#EA8890",
          400: "#E3606B",
          500: "#DC3946",
          600: "#C32F3D",
          700: "#A92633",
          800: "#901C2A",
          900: "#771322",
        },
        success: {
          100: "#D4F0E8",
          200: "#A9E1D1",
          300: "#7FD2BB",
          400: "#54C3A4",
          500: "#29B48E",
          600: "#23A57F",
          700: "#1D9670",
          800: "#178761",
          900: "#117852",
        },
        warning: {
          100: "#FFF5E5",
          200: "#FFE5CC",
          300: "#FFD5B2",
          400: "#FFC599",
          500: "#FFB57F",
          600: "#E5A572",
          700: "#CC9665",
          800: "#B28557",
          900: "#99744A",
        },
        info: {
          100: "#D6EFFF",
          200: "#ADDFFF",
          300: "#85CFFF",
          400: "#5CBFFF",
          500: "#007BFF",
          600: "#0069D9",
          700: "#0057B3",
          800: "#00458D",
          900: "#003367",
        },
        danger: {
          100: "#F8D7DA",
          200: "#F1AFB5",
          300: "#EA8890",
          400: "#E3606B",
          500: "#DC3946",
          600: "#C32F3D",
          700: "#A92633",
          800: "#901C2A",
          900: "#771322",
        },
      },
    },
  },
};

export default config;
