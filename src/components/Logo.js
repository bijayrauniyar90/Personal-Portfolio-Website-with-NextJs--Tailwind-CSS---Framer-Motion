// import Link from 'next/link'
// import React from 'react'
// import {motion} from "framer-motion";

// const MotionLink = motion(Link);

// const Logo = () => {
//   return (
//     <div className='flex items-center justify-center mt-2'>
//       <MotionLink href="/"
//       className='w-16 h-16 bg-dark text-light flex items-center justify-center 
//       rounded-full text-2xl font-bold
//       '
//       whileHover={{
//         backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
//         transition:{duration:1, repeat:Infinity}
//       }}
//       >CB</MotionLink>
//       </div>
//   )
// }

// export default Logo


import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logoImage from '../../public/images/logo/logo1.png'; // Replace with the path to your logo file

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-12 h-12 flex items-center justify-center rounded-full border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        <Image
          src={logoImage}
          alt="Logo"
          className="w-full h-full rounded-full object-cover"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;

// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import logoImage from '../../public/images/logo/logo1.png'; // Replace with the actual path to your logo file

// const MotionLink = motion(Link);

// const Logo = () => {
//   return (
//     <div className="flex items-center justify-center mt-4">
//       <MotionLink
//         href="/"
//         className="relative w-14 h-14 flex items-center justify-center rounded-full border-2 border-gray-400 shadow-md"
//         whileHover={{
//           scale: 1.1,
//           rotate: 5,
//           transition: { duration: 0.3 },
//         }}
//       >
//         <Image
//           src={logoImage}
//           alt="Professional Logo"
//           className="w-10 h-10 object-contain"
//           priority
//         />
//         <div
//           className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 opacity-30 blur-sm"
//           aria-hidden="true"
//         />
//       </MotionLink>
//     </div>
//   );
// };

// export default Logo;