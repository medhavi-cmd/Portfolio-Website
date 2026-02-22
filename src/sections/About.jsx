import { useRef } from "react";
import Card from "./components/Card";
import { Globe } from "./components/Globe";
import codingPov from "../assets/coding-pov.png";
import { Frameworks } from "./components/FrameWork";

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
            className="relative flex items-center justify-center w-full h-full"
          >
            <div className="absolute text-center">
              <p className="text-4xl font-semibold text-gray-400">
                ENGINEERED WITH PURPOSE
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Blending logic, design & scalability
              </p>
            </div>

            <Card
              style={{ rotate: "75deg", top: "25%", left: "15%" }}
              text="DSA"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "65%", left: "45%" }}
              text="React.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "25%", left: "75%" }}
              text="Redux"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="REST APIs"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "40%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", bottom: "10%", left: "30%" }}
              text="MongoDB"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", top: "15%", right: "10%" }}
              text="Tailwind CSS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-60deg", bottom: "20%", right: "5%" }}
              text="Git & GitHub"
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
        <div className="grid-special-color grid-4 mb-10">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Let’s build something impactful together
            </p>
            <p className="subtext text-center">
              I'm actively looking for internship opportunities and exciting
              tech collaborations.
            </p>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10">
            <p className="headtext mb-4">Tech Stack</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              {/* Frontend */}
              <div>
                <p className="text-white font-semibold mb-2">Frontend</p>
                <ul className="subtext space-y-1">
                  <li>Javascript</li>
                  <li>React.js</li>
                  <li>Redux Toolkit</li>
                  <li>React Router</li>
                  <li>Tailwind CSS</li>
                  <li>shadcn/ui</li>
                  <li>Three.js</li>
                </ul>
              </div>

              {/* Backend */}
              <div>
                <p className="text-white font-semibold mb-2">Backend</p>
                <ul className="subtext space-y-1">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>REST APIs</li>
                </ul>
              </div>

              {/* Databases */}
              <div>
                <p className="text-white font-semibold mb-2">Databases</p>
                <ul className="subtext space-y-1">
                  <li>MongoDB</li>
                  <li>MySQL</li>
                </ul>
              </div>

              {/* Programming */}
              <div>
                <p className="text-white font-semibold mb-2">Languages</p>
                <ul className="subtext space-y-1">
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>Python</li>
                </ul>
              </div>

              {/* Concepts */}
              <div>
                <p className="text-white font-semibold mb-2">Core Concepts</p>
                <ul className="subtext space-y-1">
                  <li>Data Structures & Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>State Management</li>
                  <li>Responsive Design</li>
                </ul>
              </div>

              {/* Tools */}
              <div>
                <p className="text-white font-semibold mb-2">Tools</p>
                <ul className="subtext space-y-1">
                  <li>Git & GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
              {/* <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
