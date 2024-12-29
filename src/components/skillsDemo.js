import React from "react";

// Card for Skills
const SkillCard = ({ skill }) => {
  return (
    <div className="bg-gray-200 text-black py-6 px-16 rounded-md shadow-md text-center">
      <h4 className="font-semibold text-lg">{skill}</h4>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-16">
      {/* Title */}
      <h2 className="font-bold text-6xl text-black mb-12">Skills</h2>

      {/* Flex Layout for Technical Skills and Professional Skills */}
      <div className="w-full grid grid-cols-2 gap-12 px-18">

        {/* Left: Technical Skills Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold text-center text-black/75 mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <SkillCard skill="HTML" />
            <SkillCard skill="CSS" />
            <SkillCard skill="JavaScript" />
            <SkillCard skill="Python" />
            <SkillCard skill="C++" />
            <SkillCard skill="SQL" />
            <SkillCard skill="TCP/IP" />
            <SkillCard skill="Packet Tracer" />
          </div>
        </div>

        {/* Right: Professional Skills Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold text-center text-black/75 mb-6">
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <SkillCard skill="Creativity" />
            <SkillCard skill="Communication" />
            <SkillCard skill="Problem Solving" />
            <SkillCard skill="Team Work" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
