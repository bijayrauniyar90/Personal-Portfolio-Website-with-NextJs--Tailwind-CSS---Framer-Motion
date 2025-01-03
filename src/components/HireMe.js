// For Test in vertical
// import React  from "react"
// import { Design } from "./Icon"
// import Link from "next/link"

// const HireMe = () => {
//     return(
//         <div className='fixed left-0 bottom-8
//         flex items-center justify-center overflow-hidden
//         '>
//             <div className='w-60  mr-10 h-auto flex place-items-center justify-between relative'>
//             <Design className={'text-dark animate-spin-slow'} />
//             <Link href="mailto:bijayrauniyar90@gmail.com" className='flex items-center justify-center
//             absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md  border border-dark w-20 h-20 rounded-full
//             font-semibold hover:bg-light hover:text-dark
//             '>  Hire me
//             </Link>
//             </div>
//         </div>
//     )
// }

// export default HireMe

// For Text in Curcular
import React from "react";
import { DesignText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className="fixed left-0 bottom-8
        flex items-center justify-center overflow-hidden
        "
    >
      <div className="w-60  mr-10 h-auto flex place-items-center justify-between relative">
        <DesignText className={"text-dark animate-spin-slow dark:fill-light"} />
        <Link
          href="mailto:bijayrauniyar90@gmail.com"
          className="flex items-center justify-center
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md  
            border border-dark w-20 h-20 rounded-full
            font-semibold hover:bg-light hover:text-dark

            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                   hover:dark:border-light
            "
        >
          {" "}
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
