import React, { useRef } from "react";
import {motion, useScroll} from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) =>{
    const ref = useRef(null);
    return(
        <li ref ={ref} className="my-8 first:mt-0  last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between">

            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-2xl">
                    {position} {" "} <a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                    <p className="font-medium w-full">
                        {work}
                    </p>
                </span>
            </motion.div>
        </li>
    )
}
const Experience = () => {
    const ref=useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end", "center start"]
        }
    )
    return(
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
            <div ref ={ref} className="w-[75%] mx-auto relative">

                <motion.div
                style={{scaleY:scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top" />                
                <ul className="w-full flex flex-col items-start justify-between ml-4">


                <Details 
                   position="Networking Cloud Intern" company="Aicte Neat"
                   companyLink="https://drive.google.com/file/d/1egm-Q_5rjAbRlz_NGAN-m2EWEoCYOgUe/view?usp=sharing"
                   time="JANUARY-MARCH, 2024" address="Bhubneshwar, Odisha"
                    work="
                   • TCP/IP OSI Models: In-depth understanding of networking layers and protocols
                   • Advanced Networking: Subnetting, VLANs, OSPF and network security.
                   • Cloud Computing: Knowledge of cloud infrastructure, services, and deployment models.
                   • Practical Experience: Hands-on network configuration, troubleshooting, and optimization."
                />

                <Details 
                   position="Data Science Intern" company="Aicte Neat"
                   companyLink="https://drive.google.com/file/d/1zS9FGQ_4Q7XdxMZD5XqkKU0SBYEImQj-/view?usp=sharing"
                   time="APRIL-JUNE, 2024" address="Bhubneshwar, Odisha"
                    work="
                    • Conducted data cleaning, transformation, and analysis using Pandas and Numpy.
                    • Developed predictive models with scikit-learn, improving business forecast accuracy.
                    • Created visualizations with Matplotlib, Seaborn, and Tableau for stakeholder communication.
                    • Built interactive dashboards to present analytical results and support decision-making."
                />

                <Details 
                   position="Network Security Associate Intern" company="Aicte Neat"
                   companyLink="https://drive.google.com/file/d/1RqV7hHz4FDl31zTx0Zn34dmgjDBoybFb/view?usp=sharing"
                   time="JULY-SEPTEMBER, 2024" address="Bhubneshwar, Odisha"
                    work="
                    • Gained expertise in Fortinet's network security solutions, including firewalls, VPNs, and intrusion prevention systems.
                    • Configured and optimized security settings to ensure robust enterprise network protection.
                    • Acquired practical experience in analyzing and mitigating cybersecurity threats using Fortinet tools.
                    • Strengthened understanding of network protocols and security architecture design."
                />
                </ul>
            </div>
        </div>
    )

}

export default Experience