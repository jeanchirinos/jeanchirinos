import fs from "fs";
import { ImageResponse } from "@vercel/og";
import projects from "src/data/projects.json";
import personalInfo from "src/data/personalInfo.json";

interface Props {
  params: { id: string };
  props: { project: (typeof projects)[0] & { image: any } };
}

export async function GET({ props }: Props) {
  const { project } = props;

  // const myImage = await project.image;

  // const cover = fs.readFileSync(
  //   myImage.default.src.replace(/\?.*/, "").replace("/@fs", "").slice(3),
  // ).buffer;

  const imageBuffer = fs.readFileSync(
    `./src/assets/images/projects/${project.id}.png`,
  );

  const image = Uint8Array.from(imageBuffer).buffer;

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
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

  return new ImageResponse(html as any, {
    width: 1200,
    height: 600,
    // fonts: [
    //   {
    //     name: "DM Sans Bold",
    //     data: DmSansBold.buffer,
    //     style: "normal",
    //   },
    //   {
    //     name: "DM Sans Regular",
    //     data: DmSansReqular.buffer,
    //     style: "normal",
    //   },
    // ],
  });
}

export function getStaticPaths() {
  const data = projects.map((project) => {
    const images = import.meta.glob<{ default: ImageMetadata }>(
      "../../../assets/**",
    );

    return {
      params: {
        id: project.id,
      },
      props: {
        project: {
          ...project,
          image: images[`../../../assets/images/projects/${project.id}.png`](),
        },
      },
    };
  });

  return data;
}
