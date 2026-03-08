import useImage from "use-image";

export function AboutMe() {
  const [github, githubstatus] = useImage("/images/githubbg.png");
  const [linkedin, linkedinstatus] = useImage("/images/linkedin.png");
  const [resume, resumestatus] = useImage("/images/resume.png");

  if (githubstatus !== "loaded" || linkedinstatus !== "loaded") return;

  return (
    <div className="relative grid md:grid-cols-2 grid-cols-1 mt-10">
      <div id="aboutme" className="absolute -top-25"></div>
      <img className="w-100 mx-auto" src="./images/profileImage.jpg" />
      <div className="flex flex-col gap-10 text-white p-5">
        <div className="flex">
          <h3 className="bitcount-single-bold text-3xl">About Me</h3>
          <div className="flex flex-1"></div>
          <div>
            <div className="flex gap-10">
              <a href="https://github.com/Austinling" target="_blank">
                <img src={github?.src} className="h-10 object-contain" />
              </a>

              <a
                href="https://www.linkedin.com/in/austin-aung-myat-349621386/"
                target="_blank"
              >
                <img src={linkedin?.src} className="w-10 h-10 object-contain" />
              </a>
              <a href="/resume.pdf" download target="_blank">
                <img src={resume?.src} className="w-12 object-contain" />
              </a>
            </div>
          </div>
        </div>
        <p className="bitcount-single-bits">
          Hi! I'm Austin, a Computer Science and AI student at the University of
          Sheffield. I am a full-stack developer and hackathon winner with a
          passion for building high-performance, real-time applications. From
          creating interactive UIs in TypeScript to developing data-driven admin
          dashboards, I love turning complex logic into seamless user
          experiences and am always looking for the next technical challenge to
          solve.
        </p>
      </div>
    </div>
  );
}
