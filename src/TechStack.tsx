import { useEffect, useState } from "react";
import type { SkillsType } from "./Types.ts";

export function TechStack() {
  const [data, setData] = useState<SkillsType | null>(null);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}information.json`)
      .then((information) => information.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Unable to load technical skills", error));
  }, []);

  if (!data) return;

  return (
    <section id="techstack" className="relative scroll-mt-28 text-center text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 justify-center gap-10 p-5 bitcount-single-bits text-4xl md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-5 items-center">
        <h1>Languages</h1>
        <div className="border-b-2 border-dotted w-70"></div>

        <div className="text-2xl">
          {Object.values(data.languages).map((language, index) => {
            return (
              <div
                key={`${index}+${language}`}
                className="flex items-center justify-center p-5 gap-10"
              >
                <img
                  src={`${baseUrl}${language.image}`}
                  className="w-10 h-10 object-contain"
                  alt=""
                  loading="lazy"
                />
                <h3> {language.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center">
        <h1>Libraries</h1>
        <div className="border-b-2 border-dotted w-70"></div>

        <div className="text-2xl">
          {Object.values(data.libraries).map((library, index) => {
            return (
              <div
                key={`${index}+${library}`}
                className="flex items-center justify-center p-5 gap-10"
              >
                <img
                  src={`${baseUrl}${library.image}`}
                  className="w-10 h-10 object-contain"
                  alt=""
                  loading="lazy"
                />
                <h3> {library.name}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center lg:col-span-1 md:col-span-2 sm-col-span1">
        <h1>Tools</h1>
        <div className="border-b-2 border-dotted w-70"></div>

        <div className="text-2xl">
          {Object.values(data.tools).map((tool, index) => {
            return (
              <div
                key={`${index}+${tool}`}
                className="flex items-center justify-center p-5 gap-10"
              >
                <img
                  src={`${baseUrl}${tool.image}`}
                  className="w-10 h-10 object-contain"
                  alt=""
                  loading="lazy"
                />
                <h3> {tool.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
