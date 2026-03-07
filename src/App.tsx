import { useState } from "react";
import { ImageDithering } from "./ImageDithering";
import { Navbar } from "./Navbar";
import { Title } from "./Title";
import { TechStack } from "./TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <div className="flex w-full">
        <ImageDithering />
      </div>
      <TechStack />
    </>
  );
}

export default App;
