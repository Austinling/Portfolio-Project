import { Links } from "./Links";
import { Face } from "./Face";
import { SkillsAndProjects } from "./SkillsAndProjects";

export function FrontPage() {
  return (
    <>
      <div className="bg-[#e4dfda] flex flex-col items-center justify-center text-center py-10 w-[100%] relative">
        <Face />
        <Links />
      </div>
      <div className="flex flex-row justify-center w-[100%] max-[900px]:flex-col max-[900px]:items-center py-10 gap-60">
        <SkillsAndProjects />
      </div>
    </>
  );
}
