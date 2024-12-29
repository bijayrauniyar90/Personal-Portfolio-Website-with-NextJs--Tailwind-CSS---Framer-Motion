import React from "react";

// Card for Skills
const SkillCard = ({ skill, description }) => {
  return (
    <div className="relative group bg-gray-200 text-black py-6 px-16 rounded-md shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <h4 className="font-semibold text-lg">{skill}</h4>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-black/75 text-white text-xs rounded-md px-3 py-1.5 z-10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max">
        {description}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-16">
      {/* Title */}
      <h2 className="font-bold text-6xl text-black mb-10 mt-16">Skills</h2>

      {/* Flex Layout for Technical Skills and Professional Skills */}
      <div className="w-full grid grid-cols-2 gap-12 px-18">
        {/* Left: Technical Skills Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold text-center text-black/75 mb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <SkillCard
              skill="HTML"
              description="Markup language for web pages."
            />
            <SkillCard
              skill="CSS"
              description="Stylesheets for web page design."
            />
            <SkillCard
              skill="C"
              description="Low-level language for system programming."
            />
            <SkillCard
              skill="C++"
              description="Extension of C, supports OOP."
            />
            <SkillCard
              skill="Java"
              description="Versatile language for cross-platform apps."
            />
            <SkillCard
              skill="Python"
              description="General-purpose, high-performance language."
            />
            <SkillCard
              skill="SQL"
              description="Language for managing databases."
            />
            <SkillCard
              skill="TCP/IP"
              description="Protocols for network communication."
            />
            <SkillCard
              skill="Packet Tracer"
              description="Network simulation tool."
            />
            <SkillCard
              skill="Wireshark"
              description="Tool for analyzing network traffic."
            />
          </div>
        </div>

        {/* Right: Professional Skills Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold text-center text-black/75 mb-2">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <SkillCard
              skill="Creativity"
              description="Ability to think outside the box and innovate."
            />
            <SkillCard
              skill="Communication"
              description="Clear and effective communication skills."
            />
            <SkillCard
              skill="Problem Solving"
              description="Efficient in identifying and resolving issues."
            />
            <SkillCard
              skill="Team Work"
              description="Collaborative work and achieving goals together."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
