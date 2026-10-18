import { useState, useEffect } from "react";
import type { SkillsType } from "./Types";

export function Projects() {
  const [data, setData] = useState<SkillsType | null>(null);

  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}information.json`)
      .then((information) => information.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Unable to load project information", error));
  }, []);

  if (!data) return;

  return (
    <section id="projects" className="relative scroll-mt-28 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-5 lg:grid-cols-2">
      {Object.values(data.projects).map((project, index) => {
        return (
          <article key={`${index}-${project.title}`} className="flex flex-col gap-6 rounded border border-white/20 p-6">
            <div className="text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bitcount-single-bold border-b-2 border-dotted text-2xl font-bold hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  {project.title}
                </a>
            </div>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <img
                src={`${baseUrl}${project.picture.replace("./", "")}`}
                className="h-40 w-full rounded object-cover md:w-1/2"
                alt={`Screenshot of ${project.title}`}
                loading="lazy"
              />
              <p className="body-copy flex-1">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
              {Object.entries(project.technologies).map(([key, value]) => {
                return (
                  <div key={`${key}-${value}`} className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 object-contain"
                      src={`${baseUrl}${value.replace("./", "")}`}
                      alt=""
                      loading="lazy"
                    ></img>
                    <span className="body-copy text-sm">{key}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-auto pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                View project
              </a>
            </div>
          </article>
        );
      })}
      </div>
    </section>
  );
}
