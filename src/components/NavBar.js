import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {  InstagramIconLatest, TwitterIcon, LinkedInIcon, GithubIcon,  LeetCode, GeeksForGeekLatest  } from "./Icon";
import Logo from "./Logo";
import {motion} from "framer-motion";




const CustomLink = ({href, title, className=""}) =>{
  const router = useRouter(); 

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block bg-dark 
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >&nbsp;</span>
      
    </Link>
  )
}

const NavBar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
      <nav>
        <CustomLink href="/" title="Home"  className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        <CustomLink href="/articles" title="Articles" className='ml-4'/>
      </nav>
      
      <nav className="flex items-center justify-center flex-wrap">

      {/* In future, I'll make it horizontal */}
      {/*  */}
      
        <motion.a href="https://www.instagram.com/bijay_official5/" target={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-3"
        >
            <InstagramIconLatest/>
        </motion.a>

        <motion.a href="https://x.com/bijay_rauniyar_" target={"_blank"}
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
         className="w-6 mx-3"
         >
            <TwitterIcon/>
        </motion.a>

        <motion.a href="https://www.linkedin.com/in/bijayrauniyar/" target={"_blank"}
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
         className="w-6 mx-3"
         >
            <LinkedInIcon/>
        </motion.a>

        <motion.a href="https://github.com/bijayrauniyar90" target={"_blank"}
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
         className="w-6 mx-3"
         >
            <GithubIcon/>
        </motion.a>

        <motion.a href="https://www.geeksforgeeks.org/user/bijayrauniyar90/" target={"_blank"}
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
         className="w-6 mx-3"
         >
            <GeeksForGeekLatest/>
        </motion.a>

        <motion.a href="https://leetcode.com/u/bijay_rauniyar/" target={"_blank"}
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}
         className="w-6 ml-3"
         >
            <LeetCode/>
        </motion.a>

       
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;