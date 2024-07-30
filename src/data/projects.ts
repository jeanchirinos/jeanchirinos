import technologies from "./technologies.json";

const { nextjs, react, typescript, tailwindcss, styledcomponents, astro } =
  technologies;

export type Project = {
  id: string;
  name: string;
  web: string;
  github: string;
  technologies: (typeof technologies)[keyof typeof technologies][];
  description: string;
};

export const projects: Project[] = [
  {
    id: "main_project",
    name: "Petcontrado",
    web: "https://petcontrado.nijui.site/",
    github: "https://github.com/jeanchirinos/FindYourPet-Frontend",
    technologies: [nextjs, react, typescript, tailwindcss],
    description: "Encuentra, reporta y adopta mascotas",
  },
  {
    id: "gunbound_emotes",
    name: "Gunbound emotes",
    web: "https://emotes-gunbound.vercel.app/",
    github: "https://github.com/jeanchirinos/emotes-gunbound",
    technologies: [react, typescript, styledcomponents],
    description: "Sonidos de emotes del juego Gunbound",
  },
  {
    id: "solar_system",
    name: '<span translate="yes">Sistema solar</span>',
    web: "https://solar-system-woad-nine.vercel.app/",
    github: "https://github.com/jeanchirinos/solar_system",
    technologies: [astro, react, tailwindcss],
    description:
      '<span><span>Información de planetas utilizando</span> <span translate="no">View Transitions</span></span>',
  },
  {
    id: "foxbel_music",
    name: "Foxbel music",
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
