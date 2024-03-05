'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type section = 'home' | 'projects' | 'about'

export default function Navbar() {

    const [section, setSection] = useState<section>('home')

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    console.log(scrollPosition)

    return (
        <nav className={`fixed top-0 ${scrollPosition > 102 ? 'bg-white' : 'bg-transparent'} left-0 z-10 space-y-4 right-0 py-5`}>
            {scrollPosition < 102 && <section className='text-center'>
                <p className='text-5xl'>Logo &#x2015;</p>
            </section>}
            <section className='text-center space-x-10'>
                <Link href={"#home"} className='text-2xl  bg-white px-5 py-2'>Home</Link>
                <Link href={'#projects'} className='text-2xl text-gray-800'>Our Projects</Link>
                <Link href={'about'} className='text-2xl text-gray-800'>About Us</Link>
            </section>
        </nav>
    )
}
