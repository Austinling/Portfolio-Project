export function Navbar() {
  return (
    <nav className="sticky top-0 z-100 flex items-baseline border-b-3 border-b-white bg-black p-5 leading-none">
      <a href="#start" className="ultra-regular" aria-label="Return to homepage">
        Aung Myat
      </a>
      <div className="flex flex-1"></div>
      <div className="flex flex-wrap justify-end gap-4 text-sm special-elite-regular sm:gap-8 sm:text-base">
        <a href="#about" className="nav-link">About</a>
        <a href="#techstack" className="nav-link">Skills</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}
