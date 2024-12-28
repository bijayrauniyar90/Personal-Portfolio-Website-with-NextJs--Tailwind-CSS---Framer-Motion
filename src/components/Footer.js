import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return(
        <footer className='w-full border-t-2 border-solid border-dark
            font-medium text-lg
            '>
            <layout className="p-8 flex items-center justify-between">
                <span className='flex items-center'>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>
                Builds with <span className='text-primary text-2xl px-1'>&#9825;</span>
                By&nbsp;<Link href="http://www.bpsr.com.np/?i=1" target={'_blank'} className='underline underline-offset-2'>Bijay Rauniyar</Link>
                </div>
                <Link href="http://www.bpsr.com.np/?i=1" target={'_blank'} className='underline underline-offset-2'> Say Hello </Link>
            </layout>
        </footer>
    )
}

export default Footer