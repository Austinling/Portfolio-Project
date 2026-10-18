import { ImageDithering } from "./ImageDithering";
import { Navbar } from "./Navbar";
import { TechStack } from "./TechStack";
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";
import { Title } from "./Title";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="start" className="scroll-mt-28" />
        <div className="relative" aria-hidden="true">
          <ImageDithering imageRef="/images/pagoda.png" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Title />
          </div>
        </div>
        <div className="flex flex-col gap-28">
          <AboutMe />
          <TechStack />
          <Projects />
          <section
            id="contact"
            className="scroll-mt-28 px-5 pb-20 text-center text-white"
          >
            <div className="mx-auto max-w-3xl border-t border-white/20 pt-16">
              <h2 className="bitcount-single-bold text-4xl">Let's Connect</h2>
              <p className="body-copy mx-auto mt-5 max-w-xl">
                I'm open to industrial placement opportunities
              </p>
              <a
                href="https://www.linkedin.com/in/austin-aung-myat-349621386/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded border border-white px-6 py-3 font-bold transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
              >
                Connect on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
