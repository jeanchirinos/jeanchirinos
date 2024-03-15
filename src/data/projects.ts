import technologies from "./technologies.json";

const { nextjs, react, typescript, tailwindcss, styledcomponents, astro } =
  technologies;

export const projects = [
  {
    id: "main_project",
    name: "Petcontrado",
    web: "https://encuentratumascota.nijui.com/",
    github: "https://github.com/jeanchirinos/FindYourPet-Frontend",
    technologies: [nextjs, react, typescript, tailwindcss],
    description: "Encuentra, reporta y adopta mascotas",
  },
  {
    id: "gunbound_emotes",
    name: "Gunbound Emotes",
    web: "https://emotes-gunbound.vercel.app/",
    github: "https://github.com/jeanchirinos/emotes-gunbound",
    technologies: [react, typescript, styledcomponents],
    description: "Sonidos de emotes del juego Gunbound",
  },
  {
    id: "solar_system",
    name: "Sistema Solar",
    web: "https://solar-system-woad-nine.vercel.app/",
    github: "https://github.com/jeanchirinos/solar_system",
    technologies: [astro, react],
    description: "Información de planetas utilizando View Transitions",
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
];
