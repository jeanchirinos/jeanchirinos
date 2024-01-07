import fs from "fs";
import { ImageResponse } from "@vercel/og";
import personalInfo from "src/data/personalInfo.json";
import type { ReactElement } from "react";

export async function GET() {
  const profile = fs.readFileSync("./src/assets/images/profile.jpg").buffer;

  const html = {
    type: "div",
    props: {
      children: [
        {
          type: "div",
          props: {
            tw: "h-full w-4 absolute top-0 left-0 bg-white",
            // style: {
            //   background: "linear-gradient(180deg, #7B88CE 0%, #D8ACCF 100%)",
            // },
          },
        },
        {
          type: "div",
          props: {
            tw: "flex",
            children: [
              {
                type: "div",
                props: {
                  tw: "h-full flex justify-center items-center p-2 rounded-full overflow-hidden bg-white",
                  // style: {
                  //   background:
                  //     "linear-gradient(180deg, #7B88CE 0%, #D8ACCF 100%)",
                  // },
                  children: [
                    {
                      type: "div",
                      props: {
                        tw: "bg-[#141416] flex justify-center items-center p-4 rounded-full overflow-hidden",
                        children: [
                          {
                            type: "div",
                            props: {
                              tw: "w-[170px] h-[170px] flex rounded-full overflow-hidden",
                              children: [
                                {
                                  type: "img",
                                  props: {
                                    src: profile,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                type: "div",
                props: {
                  tw: "ml-4 flex flex-col justify-center",
                  children: [
                    {
                      type: "div",
                      props: {
                        tw: "text-7xl font-bold text-white",
                        children: personalInfo.name,
                      },
                    },
                    {
                      type: "div",
                      props: {
                        tw: "text-5xl font-bold text-[#e5e5e5]",
                        children: personalInfo.occupation,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      tw: "flex w-full h-full justify-center items-center bg-[#141416] relative",
    },
  };

  return new ImageResponse(html as ReactElement<any>, {
    width: 1200,
    height: 600,
  });
}
