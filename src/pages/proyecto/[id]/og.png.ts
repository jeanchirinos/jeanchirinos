import fs from "fs";
import { ImageResponse } from "@vercel/og";
import projects from "src/data/projects.json";
import personalInfo from "src/data/personalInfo.json";

interface Props {
  params: { id: string };
  props: { project: (typeof projects)[0] };
}

export async function GET(props: Props) {
  const { project } = props.props;

  const image = fs.readFileSync(
    `./src/assets/images/projects/${project.id}.png`,
  ).buffer;

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html: any = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            // using tailwind
            tw: "w-[400px] h-[400px] flex rounded-md overflow-hidden",
            children: [
              {
                type: "img",
                props: {
                  src: image,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "pl-10 shrink flex",
            children: [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "48px",
                    // fontFamily: "DM Sans Bold",
                  },
                  children: project.name,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            tw: "absolute right-[40px] bottom-[40px] flex items-center",
            children: [
              {
                type: "div",
                props: {
                  tw: "text-blue-600 text-3xl",
                  style: {
                    // fontFamily: "DM Sans Bold",
                  },
                  children: personalInfo.name,
                },
              },
              {
                type: "div",
                props: {
                  tw: "px-2 text-3xl",
                  style: {
                    fontSize: "30px",
                  },
                  children: "|",
                },
              },
              {
                type: "div",
                props: {
                  tw: "text-3xl",
                  children: "Portafolio",
                },
              },
            ],
          },
        },
      ],
      tw: "w-full h-full flex items-center justify-center relative px-22",
      style: {
        background: "#f7f8e8",
        // fontFamily: "DM Sans Regular",
      },
    },
  };

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
  });
}

export function getStaticPaths() {
  const data = projects.map((project) => ({
    params: {
      id: project.id,
    },
    props: {
      project,
    },
  }));

  return data;
}
