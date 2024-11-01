import technologies from "./technologies.json";

const {
  nextjs,
  react,
  typescript,
  tailwindcss,
  styledcomponents,
  astro,
  nest,
  swagger,
} = technologies;

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
    name: "Cobro de luz compartido",
    web: "https://cobrodeluzcompartida.vercel.app/",
    github: "https://github.com/jeanchirinos/cobrodeluzcompartida",
    technologies: [nextjs, react, typescript, tailwindcss],
    description: "Calcula el cobro de luz compartido entre inquilinos",
  },
  {
    id: "nestjs_posts_app",
    name: "NesJS Posts App",
    web: "https://nestjs-posts-app.onrender.com/api-docs",
    github: "https://github.com/jeanchirinos/nestjs-posts-app",
    technologies: [nest, typescript, swagger],
    description: "API de gestión de posts",
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
    id: "petcontrado",
    name: "Petcontrado",
    web: "https://petcontrado.nijui.site/",
    github: "https://github.com/jeanchirinos/FindYourPet-Frontend",
    technologies: [nextjs, typescript, tailwindcss],
    description: "Encuentra, reporta y adopta mascotas",
  },
  {
    id: "solar_system",
    name: '<span translate="yes">Sistema solar</span>',
    web: "https://solar-system-woad-nine.vercel.app/",
    github: "https://github.com/jeanchirinos/solar_system",
    technologies: [astro, tailwindcss],
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
  // {
  //   id: "simple_js",
  //   name: "Simple JS",
  //   web: "https://simple-js.vercel.app/",
  //   github: "https://github.com/jeanchirinos/simple-js",
  //   technologies: [react, styledcomponents],
  //   description: "Prototipo de compilador de JavaScript",
  // },
];
