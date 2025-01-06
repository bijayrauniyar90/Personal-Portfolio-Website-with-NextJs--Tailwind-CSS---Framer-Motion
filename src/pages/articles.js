import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react"; // Import useRef
import Image from "next/image";
import article1 from "../../public/images/projects/attenSure.png";
import article2 from "../../public/images/projects/diagnosify.png";
import article3 from "../../public/images/projects/portfolio-cover-image.jpg";
import { motion, useMotionValue } from "framer-motion";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article6 from "../../public/images/articles/create modal component in react using react portals.png";
import article7 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article8 from "../../public/images/articles/What is Redux with easy explanation.png";
import article9 from "../../public/images/articles/What is higher order component in React.jpg";


const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0);
    }
  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMouseLeave}
    >
      <h2
        className="capitalize text-xl font-semibold
            hover:underline
            "
      >
        {title}
      </h2>
      <FramerImage
      style={{x:x,y:y}}
      initial={{opacity:0}}
      whileInView={{opacity:1, transition:{duration:0.2}}}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg" />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once:true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl
         flex items-center justify-between bg-light text-dark first:mt-0 border border-solid
         border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li
      className=" relative col-span-1 w-full p-4 bg-light border border-dark 
                 rounded-2xl shadow-md hover:shadow-lg transition-shadow dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark
      rounded-br-3xl"
      />
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-lg inline-block cursor-pointer overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="capitalize text-2xl font-bold my-4 mt-4 hover:underline transition-colors">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-4 text-gray-700 dark:text-light">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Bijay Rauniyar | Articles Page</title>
        <meta
          name="description"
          content="Explore informative and innovative articles by Bijay Rauniyar, focusing on technology, student systems, and impactful solutions."
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Innovation Begins With a Single Question!"
            className="mb-16 text-center"
          />
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FeaturedArticle
              title="Student Attendance System Management: A Complete Guide"
              summary="Discover how a student attendance system can streamline classroom management and enhance record-keeping.
              Explore its features, benefits, and implementation tips to simplify attendance tracking for schools and colleges."
              time="10 min read"
              link="/"
              img={article1}
            />

            {/* <FeaturedArticle
              title="Build a Smart Disease Predictor with Diagnosify in ReactJS"
              summary="Learn how to create a powerful disease prediction application, Diagnosify, using ReactJS.
                        Follow this step-by-step guide to build and integrate a machine learning-powered disease prediction system in 
                        your ReactJS project."
              time="10 min read"
              link="/"
              img={article2}
            /> */}

            {/* <FeaturedArticle
              title="Student Attendance System Management: A Complete Guide"
              summary="Discover how a student attendance system can streamline classroom management and enhance record-keeping.
              Explore its features, benefits, and implementation tips to simplify attendance tracking for schools and colleges."
              time="10 min read"
              link="/"
              img={article1}
            /> */}

            <FeaturedArticle
              title="Build a Personal Portfolio Website with Next.js, Tailwind CSS, and Framer Motion"
              summary="Learn how to design and develop a captivating personal portfolio website using 
              Next.js for fast server-side rendering, Tailwind CSS for a responsive and utility-first 
              styling approach, and Framer Motion for adding beautiful animations to your site."
              time="12 min read"
              link="/"
              img={article3}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="Jan 3, 2025"
              link="/"
              img={article4}
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="Jan 3, 2025"
              link="/"
              img={article5}
            />
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="Jan 3, 2025"
              link="/"
              img={article6}
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="Jan 3, 2025"
              link="/"
              img={article7}
            />
            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="Jan 3, 2025"
              link="/"
              img={article8}
            />
            <Article
              title="What Is Higher Order Component (Hoc) In React?"
              date="Jan 3, 2025"
              link="/"
              img={article9}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
