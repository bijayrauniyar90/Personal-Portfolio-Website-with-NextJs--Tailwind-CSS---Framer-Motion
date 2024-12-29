import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/image5.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 300})
    const isInView = useInView(ref, {once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
        },[isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
        },[springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return(
        <>
        <Head>
            <title>Bijay Rauniyar | About Page</title>
            <meta name="description" content="I am passionate about both Data Science and Networking, with expertise in Python, SQL, machine learning, and data visualization, alongside CCNA certifications and hands-on networking experience. I thrive on solving complex problems, optimizing network performance, and leveraging data-driven insights to drive impactful solutions, bridging the gap between technology and innovation." />
        </Head>

        <main className='flex w-full flex-col items-center justify-center'>

        <Layout className='pt-16'>
        <AnimatedText text="Turning Ideas into Impact!" className='!text-7xl mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>
                    Biography
                </h2>

                <p className='font-medium'>
                Hello! I’m Bijay Rauniyar, passionate about Data Science and Networking. With skills in Python, SQL, machine learning, and cybersecurity, I transform challenges into impactful, data-driven solutions.

                </p>

                <p className="my-4 font-medium">
  I believe in the power of technology to create meaningful connections—whether it&apos;s uncovering insights from data, designing intelligent systems, or optimizing network performance. My work is fueled by creativity, precision, and an insatiable curiosity for emerging technologies.
</p>


                <p className="my-4 font-medium"> Every project is an opportunity to innovate, solve real-world problems, and push boundaries. Let’s collaborate to craft solutions that inspire, connect, and drive change! </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8
            '>

                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                <Image src={profilePic} alt="Bijay Rauniyar" className='w-full h-auto rounded-2xl' />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'> 
                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers  value={2} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>
                        Team collaboration
                    </h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers  value={3} />+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>
                        Project Completed
                    </h2>
                </div>

                <div className='flex flex-col items-end justify-center'>
                    <span className='inline-block text-7xl font-bold'>
                    <AnimatedNumbers value={1} />-
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>
                        Years of Experience
                    </h2>
                </div>
            </div>

        </div>

        <Skills />
        
        </Layout>
       
        </main>
        </>
    )
}

export default about
