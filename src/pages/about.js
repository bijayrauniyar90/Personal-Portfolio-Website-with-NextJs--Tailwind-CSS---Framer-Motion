import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/image5.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

// Animated Numbers Component
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 300 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Bijay Rauniyar | About</title>
        <meta
          name="description"
          content="I am passionate about Data Science and Networking with expertise in Python, SQL, machine learning, and cybersecurity. I excel in creating impactful, data-driven solutions."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* Title */}
          <AnimatedText
            text="Turning Ideas into Impact!"
            className="!text-6xl mb-12 text-center"
          />

          {/* Grid Section */}
          <div className="grid w-full grid-cols-8 gap-12">
            {/* Biography Section */}
            <div className="col-span-3 flex flex-col items-start justify-start space-y-4">
              <h2 className="text-lg font-bold uppercase text-dark/75 mb-4">
                Biography
              </h2>
              <p className="font-medium text-justify leading-relaxed">
                Hello! I’m Bijay Rauniyar, passionate about Data Science and
                Networking. With skills in Python, SQL, machine learning, and
                cybersecurity, I transform challenges into impactful,
                data-driven solutions.
              </p>
              <p className="font-medium text-justify leading-relaxed">
                I believe in the power of technology to create meaningful
                connections—whether it&apos;s uncovering insights from data,
                designing intelligent systems, or optimizing network
                performance. My work is fueled by creativity, precision, and an
                insatiable curiosity for emerging technologies.
              </p>
              <p className="font-medium text-justify leading-relaxed">
                Every project is an opportunity to innovate, solve real-world
                problems, and push boundaries. Let’s collaborate to craft
                solutions that inspire, connect, and drive change!
              </p>
            </div>

            {/* Profile Image */}
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8"
              style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Bijay Rauniyar"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Achievements Section */}
            <div className="col-span-2 flex flex-col items-end justify-between space-y-6">
              {[
                { value: 2, label: 'Team Collaboration' },
                { value: 3, label: 'Projects Completed' },
                { value: 1, label: 'Years of Experience' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-end justify-center"
                >
                  <span className="inline-block text-6xl font-bold">
                    <AnimatedNumbers value={stat.value} />
                    {index < 2 ? '+' : ''}
                  </span>
                  <h2 className="text-lg font-medium capitalize text-dark/75">
                    {stat.label}
                  </h2>
                </div>
              ))}
            </div>


            {/* Right Column: Stats */}
            {/* <div className="col-span-1 md:col-span-2 flex flex-col space-y-10">
              {[
                { value: 2, label: "Team Collaboration" },
                { value: 3, label: "Projects Completed" },
                { value: 1, label: "Years of Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-dark/90 text-light shadow-lg flex flex-col items-center"
                >
                  <span className="text-6xl font-extrabold">
                    <AnimatedNumbers value={stat.value} />
                    {index < 2 ? "+" : ""}
                  </span>
                  <h3 className="text-xl font-medium mt-2">{stat.label}</h3>
                </div>
              ))}
            </div> */}
          </div>

          {/* Skills Section */}
          <Skills />
          <Experience/>
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
