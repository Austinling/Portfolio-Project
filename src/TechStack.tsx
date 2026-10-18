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

  const sections = [
    { title: "Languages", items: Object.values(data.languages), layout: "sm:grid-cols-2 lg:grid-cols-4" },
    { title: "Libraries", items: Object.values(data.libraries), layout: "sm:grid-cols-2" },
    { title: "Tools", items: Object.values(data.tools), layout: "sm:grid-cols-2" },
  ];

  return (
    <section id="techstack" className="relative scroll-mt-28 px-5 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-5 bitcount-single-bits md:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`rounded-lg border border-white/20 bg-white/5 p-5 backdrop-blur-sm ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <h2 className="text-center text-3xl">{section.title}</h2>
            <div className="mx-auto my-4 w-24 border-b-2 border-dotted border-white/60" />
            <div className={`grid grid-cols-1 gap-3 ${section.layout}`}>
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex min-h-16 items-center gap-4 rounded-md border border-white/10 px-4 py-3 transition hover:border-white/40 hover:bg-white/10"
                >
                  <img
                    src={`${baseUrl}${item.image}`}
                    className="h-9 w-9 shrink-0 object-contain"
                    alt=""
                    loading="lazy"
                  />
                  <h3 className="text-xl leading-tight">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
