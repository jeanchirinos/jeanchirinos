/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nextjs: "#000000",
        react: "#61DAFB",
        typescript: "#3178C6",
        tailwindcss: "#26C2FE",
        astro: "#FF5D5D",
        styledcomponents: "#FFD459",
        nest: "#EA2845",
        swagger: "#85EA2D",
      },
    },
  },
  plugins: [],
};
