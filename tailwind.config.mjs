/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        astro: "rgba(255, 93, 1, 1)",
        nextjs: "#000000",
        react: "rgba(97, 218, 251, 1)",
        styledcomponents: "#FFD459",
        tailwindcss: "rgba(38, 194, 254, 1)",
        typescript: "#3178C6",
      },
    },
  },
  plugins: [],
};
