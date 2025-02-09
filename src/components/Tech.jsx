import React from "react";
import { SectionWrapper } from "../hoc";
import BallCanvas from "./canvas/BallCanvas";  // ✅ Correct path
import { technologies } from "../constants";  // ✅ Import the list of technologies

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div key={tech.name} className="w-28 h-28">
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
