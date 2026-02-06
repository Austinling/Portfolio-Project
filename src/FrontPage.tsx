import { Links } from "./Links";
import { Face } from "./Face";
import { Footer } from "./Footer";
import { SkillsAndProjects } from "./SkillsAndProjects";

export function FrontPage() {
  return (
    <>
      <div className="bg-[#e4dfda] flex flex-col items-center justify-center text-center py-10 w-full relative">
        <Face />
        <Links />
      </div>
      <div className="flex flex-row justify-center w-full max-[900px]:flex-col max-[900px]:items-center py-10 gap-60">
        <SkillsAndProjects />
      </div>
      <Footer />
    </>
  );
}
