import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, cgpa, Info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-12 w-full md:w-[75%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="pl-10"
      >
        <h3 className="text-2xl font-semibold text-dark">{type}</h3>
        <span className="block text-sm text-gray-500 mt-1">
          {time} | {place}
        </span>
        <span className="block text-sm text-gray-600 mt-1">
          CGPA/Percentage: {cgpa}
        </span>
        <p className="text-base text-gray-700 mt-4">
          {Info.join(", ")}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-dark">
        Education
      </h2>
      <div ref={ref} className="relative w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        {/* Vertical Progress Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 top-0 w-[3px] h-full bg-dark origin-top"
        />
        <ul className="space-y-12">
          <Details
            type="B.Tech in Computer Science and Engineering"
            time="2021-2025"
            place="Kalinga Institute Of Industrial Technology, Bhubneshwar"
            cgpa="8.39 CGPA"
            Info={[
              "Relevant Courses Included",
              "Data Structures and Algorithms",
              "Computer Network",
              "Database Management System",
              "Operating System",
              "Artificial Intelligence",
              "Machine Learning",
            ]}
          />
          <Details
            type="+2 Science"
            time="2017-2019"
            place="Shiksha Deep Higher Secondary School, Biratnagar"
            cgpa="74%"
            Info={[
              "Relevant Courses Included",
              "Physics",
              "Chemistry",
              "Mathematics",
              "Biology",
              "English",
            ]}
          />
          <Details
            type="High School"
            time="2004-2017"
            place="Apollo Om Higher Secondary School, Lahan"
            cgpa="90%"
            Info={[
              "Relevant Courses Included",
              "Science",
              "English",
              "Mathematics",
              "Social Studies",
              "Public Health & Environment",
              "Account",
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
