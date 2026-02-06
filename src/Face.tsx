import face from "./assets/images/profileImage.jpg";

export function Face() {
  return (
    <>
      <h1 className="text-[#a78271] text-4xl mb-10 font-mono">Hi, I'm Aung!</h1>

      <div className="relative h-72 w-72 mt-12.5 font-mono">
        <img
          className="rounded-full h-full w-full"
          src={face}
          alt="Profile Picture"
        />

        <svg
          viewBox="0 0 200 200"
          className="spinSlow absolute scale-130 inset-0 h-full w-full"
        >
          <path
            id="circle"
            d="M 100 100 m -85 0 a 85 85 0 1 1 170 0 a 85 85 0 1 1 -170 0"
            fill="transparent"
          ></path>

          <text>
            <textPath href="#circle" text-length="100%" startOffset="0%">
              Check Out
            </textPath>
            <textPath href="#circle" text-length="100%" startOffset="50%">
              What I've Built
            </textPath>
          </text>
        </svg>
      </div>
    </>
  );
}
