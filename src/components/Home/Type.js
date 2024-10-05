import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Expert Javascript Developer",
          "Lead UI Engineer",
          "Lead Web Developer",
          "AWS Certified Developer",
          "Accessibility Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
