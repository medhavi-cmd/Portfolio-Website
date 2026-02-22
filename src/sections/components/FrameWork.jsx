import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "react",
    "redux",
    "tailwindcss",
    "javascript",
    "nodejs",
    "express",
    "mongodb",
    "mysql",
    "java",
    "cplusplus",
    "python",
    "git",
    "vitejs",
    "threejs",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      
      {/* Outer Circle */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner Circle */}
      <OrbitingCircles iconSize={28} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    alt="tech-icon"
    className="duration-300 rounded-md hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
  />
);