import { useState, useEffect } from "react";

type ProjectDetails = {
  title: string;
  description: string;
  picture: string;
  link: string;
};

type SkillsType = {
  skills: Record<string, string>;
  projects: Record<string, ProjectDetails>;
};

export function SkillsAndProjects() {
  const [data, setData] = useState<SkillsType | null>(null);

  useEffect(() => {
    fetch("./information.json")
      .then((information) => information.json())
      .then((jsonInformation) => setData(jsonInformation))
      .catch((error) => console.error("Caught an Error"));
  }, []);

  if (!data) return;

  return (
    <>
      <div className="w-100">
        <h2 className="text-center text-3xl mt-10 mb-10 font-mono text-[#a78271]">
          My Skills
        </h2>

        <div className="skillDiv flex flex-col gap-10 mt-4 h-100 justify-center bg-white p-5 rounded-lg shadow-lg">
          {Object.entries(data.skills).map(([key, value]) => {
            return (
              <div key={key} className="flex flex-row gap-6 mt-auto mb-auto">
                <img src={value} className="w-10 h-10 object-contain" />
                <h4 className="text-3xl font-mono">{key}</h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center w-100 items-center">
        <h1 className="text-center text-3xl mt-10 mb-10 font-mono text-[#a78271]">
          Projects
        </h1>

        <div className="projectDiv flex flex-col justify-center gap-10 content-center h-120 md:h-100 w-100 md:w-140 bg-white rounded-lg shadow-lg">
          {Object.values(data.projects).map((project, index) => {
            return (
              <div key={index} className="flex flex-col gap-10 p-5">
                <div className="mb-auto mt-auto text-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-mono font-bold hover:text-blue-500"
                  >
                    {project.title}
                  </a>
                </div>

                <div className="mb-auto mt-auto flex flex-col md:flex-row gap-8 items-center">
                  <img src={project.picture} className="h-40 w-70" />
                  <h1 className="text-1xl font-mono flex-1">
                    {project.description}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
