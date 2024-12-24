import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { 
  InstagramIconLatest, 
  TwitterIcon, 
  LinkedInIcon, 
  GithubIcon, 
  LeetCode, 
  GeeksForGeekLatest 
} from "./Icon";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
          h-[1px] inline-block bg-dark 
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      {/* Primary Navigation */}
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/titles" title="Articles" className="ml-4" />
      </nav>

      {/* Social Links */}
      <nav className="flex items-center justify-center flex-wrap space-x-4">
        <a
          href="https://www.instagram.com/bijay_official5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIconLatest />
        </a>
        <a
          href="https://x.com/bijay_rauniyar_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/bijayrauniyar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/bijayrauniyar90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/bijayrauniyar90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GeeksForGeekLatest />
        </a>
        <a
          href="https://leetcode.com/u/bijay_rauniyar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LeetCode />
        </a>
      </nav>

      {/* Logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
