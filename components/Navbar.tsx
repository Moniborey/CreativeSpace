'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const sections = [{
    label:'Home',
    id:'#home'
},{
    label:'Our Projects',
    id:'#projects'
},{
    label:'About Us',
    id:'#about'
}]

export default function Navbar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [sectionID, setSectionID] = useState('#home')

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

    return (
        <nav className={`fixed top-0 ${scrollPosition > 102 ? 'bg-white' : 'bg-transparent'} left-0 z-50 space-y-4 right-0 py-5`}>
            {scrollPosition < 102 && <section className='text-center hidden md:block'>
                <p className='text-4xl md:text-5xl'>Logo &#x2015;</p>
            </section>}
            <section className='text-center text-gray-600 space-x-3 md:space-x-10'>
                {sections.map((sec,index)=>(
                    <Link onClick={()=>setSectionID(sec.id)} key={index} href={sec.id} 
                    className={`${sectionID === sec.id && scrollPosition > 102 ? 'bg-gray-900 text-white' : sectionID === sec.id && 'bg-white text-gray-800'} text-xl md:text-2xl md:px-5 md:py-2 px-3 py-2`}>{sec.label}</Link>
                ))}
            </section>
        </nav>
    )
}
