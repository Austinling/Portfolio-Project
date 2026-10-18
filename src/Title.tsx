import TypeWriter from "./UseTypeWriter";
import { useState } from "react";

export function Title() {
  const [secondText, showSecondText] = useState(false);

  return (
    <section className="flex min-h-[45vh] items-center justify-center gap-8 px-5 py-20 text-center flex-col">
      <TypeWriter
        text="Hi! I'm Austin"
        textSize={"text-5xl"}
        speed={50}
        onComplete={() => showSecondText(true)}
      ></TypeWriter>
      {secondText && (
        <TypeWriter
          text="I like building solutions to real world problems"
          textSize={"text-2xl"}
          speed={20}
        ></TypeWriter>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#projects" className="rounded border border-white px-5 py-3 text-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
          View projects
        </a>
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="rounded border border-white/50 px-5 py-3 text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400">
          Download CV
        </a>
      </div>
    </section>
  );
}
