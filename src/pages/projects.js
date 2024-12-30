import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "@/components/Icon";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
// import project2 from "../../public/images/projects/project2-cover-image.jpg";
// import project3 from "../../public/images/projects/project3-cover-image.jpg";
// import project4 from "../../public/images/projects/project4-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col lg:flex-row items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="lg:w-1/2 w-full cursor-pointer overflow-hidden rounded-lg mb-6 lg:mb-0"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="lg:w-1/2 w-full flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl mb-2">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </Link>
        <p className="text-base font-normal mb-4">{summary}</p>
        <div className="flex items-center mt-6">
          <Link href={github} target="_blank" className="w-10 mr-4">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-primary"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-4 relative shadow-lg"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark
      rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg mb-3"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between">
        <span className="text-primary font-medium text-lg mb-2">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="text-xl font-bold mb-3">{title}</h2>
        </Link>
        <div className="flex items-center">
          <Link href={github} target="_blank" className="w-8 mr-3">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="bg-dark text-light p-1 px-4 rounded-lg text-base font-semibold hover:bg-primary"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Bijay Rauniyar | Projects Page</title>
        <meta
          name="description"
          content="Projects showcasing Bijay Rauniyar's work."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Innovate, Implement, Inspire!"
            className="mb-16 text-center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Diagnosfy - Disease Predictor"
                img={project1}
                summary="An advanced disease prediction system built using machine learning and React. 
                Employed Random Forest algorithm on Kaggle datasets for accurate predictions. 
                Designed a responsive front-end with React for a user-friendly experience. 
                Connected backend services using Node.js and FASTAPI for seamless model integration. 
                Utilized NumPy, Pandas, and Scikit-learn for data preprocessing and analytics."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Crypto Tracker"
                img={project1}
                summary="A crypto tracking application providing real-time price updates and market trends. Built with React and integrated APIs for data fetching."
                link="/crypto-tracker"
                github="/crypto-tracker-repo"
                type="Regular Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Portfolio Website"
                img={project1}
                summary="A personal portfolio website showcasing projects and skills. Built using Next.js and Tailwind CSS for fast and responsive design."
                link="/portfolio"
                github="/portfolio-repo"
                type="Regular Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Task Manager App"
                img={project1}
                summary="A task management application designed for productivity enhancement. Features include task categorization, reminders, and analytics."
                link="/task-manager"
                github="/task-manager-repo"
                type="Regular Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="E-commerce Platform"
                img={project1}
                summary="An e-commerce platform offering seamless shopping experience. Built with MERN stack and integrated with payment gateways."
                link="/e-commerce"
                github="/e-commerce-repo"
                type="Regular Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
