import linkedin from "./assets/images/linkedin.png";
import github from "./assets/images/github.png";

export function Links() {
  return (
    <>
      <div className="flex gap-20 mt-18">
        <a href="https://github.com/Austinling" target="_blank">
          <img src={github} className="w-10 h-10 object-contain" />
        </a>

        <a
          href="https://www.linkedin.com/in/austin-aung-myat-349621386/"
          target="_blank"
        >
          <img src={linkedin} className="w-10 h-10 object-contain" />
        </a>
      </div>
    </>
  );
}
