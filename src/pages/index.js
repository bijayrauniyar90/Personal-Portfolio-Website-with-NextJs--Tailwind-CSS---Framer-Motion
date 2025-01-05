import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/imageLatest.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen pt-0 dark:text-light">
        <Layout>
          {/* Title Section */}

          <div className="flex justify-between w-full">
            <div className="w-1/2  ">
              <Image
                src={profilePic}
                alt="Profile Picture"
                className="w-2/3 h-auto mx-auto "
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            {/* <div className="w-full flex flex-col items-center">
              <div className="w-full flex justify-center mb-8">
              <Image src={profilePic} alt="Profile Picture" className='w-1/3 h-auto rounded-full' />
            </div> */}

            <div className="w-1/2 flex flex-col items-start self-start mt-4">
              {/* Animated Title */}
              <AnimatedText
                text="Hi, I'm Bijay Rauniyar"
                className="!text-4xl !text-left text-orange-600"
              />

              {/* <AnimatedText text="Driving Excellence with Data, Design, and Determination" className='!text-6xl !text-left' /> */}
              <AnimatedText
                text="Driving Excellence Through Data and Networking Expertise"
                className="!text-5xl !text-left"
              />

              {/* <p className='my-4 text-base font-medium'>
                Data Science enthusiast skilled in Python, SQL, and machine learning, with experience in data analysis, predictive modeling, and visualization. Passionate about solving problems and creating impactful, data-driven solutions.
              </p> */}

              <p className="my-4 text-base font-medium">
                As a passionate Data Science enthusiast skilled in Python, SQL,
                and machine learning, I specialize in data analysis, predictive
                modeling, and visualization. With a strong foundation in
                Networking, including cloud computing, TCP/IP, and network
                security, I combine data-driven strategies with networking
                expertise to solve complex problems and deliver innovative
                solutions.
              </p>

              <div className="flex items-center mt-2">
                <Link
                  href="/Bijay Prasad Shah Rauniyar_Data Science.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                   hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                   hover:dark:border-light
                   "
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link
                  href="mailto:bijayrauniyar90@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="Bijay Rauniyar"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
