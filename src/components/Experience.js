import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="text-2xl font-semibold text-dark dark:text-light">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className="block text-sm text-gray-500 mt-1 dark:text-light/75">
          {time} | {address}
        </span>
        <ul className="text-base text-gray-700 mt-4 space-y-2 dark:text-light">
          {work.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-primary dark:text-light">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="py-20">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-dark dark:text-light">
        Experience
      </h2>
      <div ref={ref} className="relative w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        {/* Vertical Progress Line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-6 top-0 w-[3px] h-full bg-dark origin-top dark:bg-light dark:text-light"
        />
        <ul className="space-y-12 dark:text-light">

        <Details
            position="Network Security Associate Intern"
            company="AICTE Neat"
            companyLink="https://drive.google.com/file/d/1RqV7hHz4FDl31zTx0Zn34dmgjDBoybFb/view?usp=sharing"
            time="JULY-SEPTEMBER, 2024"
            address="Virtual Internship"
            work={[
              "Gained expertise in Fortinet's network security solutions, including firewalls, VPNs, and intrusion prevention systems.",
              "Configured and optimized security settings to ensure robust enterprise network protection.",
              "Acquired practical experience in analyzing and mitigating cybersecurity threats using Fortinet tools.",
              "Strengthened understanding of network protocols and security architecture design.",
            ]}
        />

        <Details
            position="Data Science Intern"
            company="AICTE Neat"
            companyLink="https://drive.google.com/file/d/1zS9FGQ_4Q7XdxMZD5XqkKU0SBYEImQj-/view?usp=sharing"
            time="APRIL-JUNE, 2024"
            address="Virtual Internship"
            work={[
              "Conducted data cleaning, transformation, and analysis using Pandas and Numpy.",
              "Developed predictive models with scikit-learn, improving business forecast accuracy.",
              "Created visualizations with Matplotlib, Seaborn, and Tableau for stakeholder communication.",
              "Built interactive dashboards to present analytical results and support decision-making.",
            ]}
        />
          
        <Details
            position="Networking Cloud Intern"
            company="AICTE Neat"
            companyLink="https://drive.google.com/file/d/1egm-Q_5rjAbRlz_NGAN-m2EWEoCYOgUe/view?usp=sharing"
            time="JANUARY-MARCH, 2024"
            address="Virtual Internship"
            work={[
              "In-depth understanding of TCP/IP OSI models and networking protocols.",
              "Advanced networking techniques: Subnetting, VLANs, OSPF, and network security.",
              "Knowledge of cloud infrastructure, services, and deployment models.",
              "Practical experience in network configuration, troubleshooting, and optimization.",
            ]}
        />
         
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
