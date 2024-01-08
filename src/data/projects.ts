import technologies from "./technologies.json";

const { astro, react, styledcomponents, typescript } = technologies;

export const projects = [
  {
    id: "gunbound_emotes",
    name: "Gunbound Emotes",
    web: "https://emotes-gunbound.vercel.app/",
    github: "https://github.com/jeanchirinos/emotes-gunbound",
    technologies: [react, typescript, styledcomponents],
    description: "Sonidos de emotes del juego Gunbound",
  },
  {
    id: "foxbel_music",
    name: "Foxbel Music",
    web: "https://foxbel-music-seven.vercel.app/",
    github: "https://github.com/jeanchirinos/Foxbel-Music",
    technologies: [react, typescript, styledcomponents],
    description: "Reproducción de canciones obtenidas de Deezer",
  },
  {
    id: "simple_js",
    name: "Simple JS",
    web: "https://simple-js.vercel.app/",
    github: "https://github.com/jeanchirinos/simple-js",
    technologies: [react, styledcomponents],
    description: "Prototipo de compilador de JavaScript",
  },
  {
    id: "portfafolio_ehsan",
    name: "Portfolio Ehsan",
    web: "https://ehsan-portfolio-design.vercel.app/",
    github: "https://github.com/jeanchirinos/ehsan-portfolio-design",
    technologies: [astro],
    description: "Desarrollo de diseño de un portafolio",
  },
];
