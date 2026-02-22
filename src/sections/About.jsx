import { useRef } from "react";
import Card from "./components/Card";
import { Globe } from "./components/Globe"; 
import codingPov from "../assets/coding-pov.png";
import CopyEmailButton from "./components/CopyEmailButton";
// import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={codingPov}
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Medhavi Singh</p>
            <p className="subtext">
              I'm a Computer Science student passionate about building scalable
              web applications and mastering Data Structures & Algorithms. I
              focus on writing clean, efficient code and constantly improving my
              problem-solving skills.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              BUILD • BREAK • LEARN
            </p>

            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="DSA"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="React"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Problem Solving"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Clean Code"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
              Based in India 🇮🇳 and open to remote internships and collaboration
              opportunities worldwide.
            </p>
            <figure className="absolute left-[30%] top-[10%]">
              <Globe />
            </figure>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Let’s build something impactful together 🚀
            </p>
            <p className="subtext text-center">
              I'm actively looking for internship opportunities and exciting
              tech collaborations.
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I work with C/C++ for DSA, Java for OOP, and the MERN stack to
              build full-stack applications. I also explore data analytics using
              Python.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
