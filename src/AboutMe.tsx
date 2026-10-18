import useImage from "use-image";

export function AboutMe() {
  const baseUrl = import.meta.env.BASE_URL;

  const [github] = useImage(`${baseUrl}/images/githubbg.png`);
  const [linkedin] = useImage(`${baseUrl}/images/linkedin.png`);
  const [resume] = useImage(`${baseUrl}/images/resume.png`);

  return (
    <section id="about" className="relative scroll-mt-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 p-5 lg:grid-cols-2 lg:items-center">
        <img
          className="mx-auto w-full max-w-md rounded border border-white/20 object-cover"
          src={`${baseUrl}/images/profileImage.jpg`}
          alt="Austin Aung Myat"
        />
        <div className="flex flex-col gap-8 text-white">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <h2 className="bitcount-single-bold text-4xl">About Me</h2>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Austinling"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Austin's GitHub profile"
                className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                {github ? (
                  <img src={github.src} className="h-10 object-contain" alt="" />
                ) : (
                  <span className="text-sm">GitHub</span>
                )}
              </a>
              <a
                href="https://www.linkedin.com/in/austin-aung-myat-349621386/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Austin's LinkedIn profile"
                className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                {linkedin ? (
                  <img src={linkedin.src} className="h-10 w-10 object-contain" alt="" />
                ) : (
                  <span className="text-sm">LinkedIn</span>
                )}
              </a>
              <a
                href={`${baseUrl}/resume.pdf`}
                download="austin-aung-myat-resume.pdf"
                aria-label="Download Austin's resume"
                className="rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                {resume ? (
                  <img src={resume.src} className="h-10 w-12 object-contain" alt="" />
                ) : (
                  <span className="text-sm">CV</span>
                )}
              </a>
            </div>
          </div>

          <p className="body-copy">
            I&apos;m a Computer Science student at the University of Sheffield
            focused on full-stack development and interactive web applications.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="bitcount-single-bold mb-2 text-xl">Experience</h3>
              <p className="body-copy">
                At NovAzure, I built React and TypeScript applications, improved
                testing with Playwright, and collaborated with Agile teams.
              </p>
            </div>
            <div>
              <h3 className="bitcount-single-bold mb-2 text-xl">Currently building</h3>
              <p className="body-copy">
                A student marketplace using Java, Spring Boot, and PostgreSQL.
              </p>
            </div>
          </div>
          <p className="body-copy">
            Outside of coding, I serve as CompSoc Treasurer and iForge IT Team
            Lead, managing budgets, maintaining websites, and supporting
            students with their technology needs.
          </p>
        </div>
      </div>
    </section>
  );
}
