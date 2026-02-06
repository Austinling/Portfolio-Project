import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

type ProjectDetails = {
  title: string;
  description: string;
  picture: string;
  link: string;
  technologies: string;
};

type SkillDetails = {
  name: string;
  image: string;
  libraries: string;
};

type SkillsType = {
  skills: Record<string, SkillDetails>;
  projects: Record<string, ProjectDetails>;
};

export function SkillsAndProjects() {
  const [data, setData] = useState<SkillsType | null>(null);

  useEffect(() => {
    fetch("./information.json")
      .then((information) => information.json())
      .then((jsonInformation) => setData(jsonInformation))
      .catch((error) => console.error(`${error}`));
  }, []);

  if (!data) return;

  return (
    <>
      <div className="w-100">
        <h2 className="text-center text-3xl mt-10 mb-10 font-mono text-[#a78271]">
          My Skills
        </h2>

        <div className="skillDiv flex flex-col gap-10 mt-4 h-100 justify-center bg-white p-5 rounded-lg shadow-lg">
          {Object.values(data.skills).map((project, index) => {
            return (
              <div key={index} className="flex flex-row gap-6 mt-auto mb-auto">
                <img src={project.image} className="w-10 h-10 object-contain" />
                <h4 className="text-3xl font-mono flex items-center gap-3">
                  {project.name}
                  {project.libraries != null && (
                    <div className="group">
                      <ArrowRight className="text-[#a78271] animate-right hover:text-blue-100" />
                      <div
                        key={index}
                        className="hidden group-hover:flex flex-row gap-6 absolute bg-white rounded-3xl p-3 border-2"
                      >
                        {Object.entries(project.libraries).map(
                          ([key, value]) => {
                            return (
                              <div
                                key={key}
                                className="hidden group-hover:flex gap-3 shadow-3xl"
                              >
                                <div>{key}</div>
                                <img
                                  src={value}
                                  className="w-10 h-10 object-contain"
                                />
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  )}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col justify-center w-100 items-center">
        <h1 className="text-center text-3xl mt-10 mb-10 font-mono text-[#a78271]">
          Projects
        </h1>

        <div className="projectDiv flex flex-col justify-center gap-10 content-center h-auto md:h-auto w-100 md:w-140 bg-white rounded-lg shadow-lg">
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

                <div className="flex">
                  {Object.entries(project.technologies).map(([key, value]) => {
                    return (
                      <div className="flex gap-3">
                        <img
                          className="w-10 h-10 object-contain"
                          src={value}
                        ></img>
                        <h1 className="font-mono">{key}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
