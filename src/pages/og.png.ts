import fs from "fs";
import { ImageResponse } from "@vercel/og";
import personalInfo from "src/data/personalInfo.json";
import { createElement } from "react";

export async function GET() {
  const profile = fs.readFileSync("./src/assets/images/profile.jpg").buffer;

  // const html0 = createElement(
  //   "div",
  //   {
  //     tw: "flex w-full h-full justify-center items-center bg-[#121212]",
  //     style: {
  //       gap: "4rem",
  //     },
  //   },
  //   createElement("img", {
  //     tw: "w-44 rounded-full",
  //     src: profile,
  //   }),
  //   createElement(
  //     "div",
  //     {
  //       tw: "flex flex-col",
  //       style: {
  //         gap: "1rem",
  //       },
  //     },
  //     createElement(
  //       "span",
  //       {
  //         tw: "text-7xl font-bold text-white",
  //       },
  //       personalInfo.name,
  //     ),
  //     createElement(
  //       "span",
  //       {
  //         tw: "text-5xl text-[#e5e5e5]",
  //       },
  //       personalInfo.occupation,
  //     ),
  //   ),
  // );

  const html = createElement("main", {
    tw: "flex w-full h-full justify-center items-center bg-[#121212]",
    style: {
      gap: "3rem",
    },
    children: [
      createElement("aside", {
        tw: "h-full w-2 inset-0 bg-white",
        style: {
          position: "absolute",
        },
      }),
      createElement("section", {
        tw: "p-2 border-4 border-white rounded-full flex",
        children: createElement("img", {
          tw: "w-44 rounded-full",
          src: profile,
        }),
      }),
      createElement("section", {
        tw: "flex flex-col",
        style: {
          gap: "1rem",
        },
        children: [
          createElement("span", {
            tw: "text-7xl font-bold text-white",
            children: personalInfo.name,
          }),
          createElement("span", {
            tw: "text-5xl text-[#e5e5e5]",
            children: personalInfo.occupation,
          }),
        ],
      }),
    ],
  });

  return new ImageResponse(html, {
    width: 1200,
    height: 600,
  });
}
