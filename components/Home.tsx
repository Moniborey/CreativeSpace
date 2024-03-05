import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <main className='bg-[url(/images/heroBG.png)] w-screen h-screen flex flex-col gap-14  '>
            <nav className='flex justify-center items-center py-6'>
                <p className='text-5xl'>Creative Space &#x2015;</p>
            </nav>
            <nav className='flex justify-center items-center gap-9'>
                <Link href={""} className='text-2xl  bg-white px-5 py-2'>Home</Link>
                <Link href={'#projects'} className='text-2xl text-gray-800'>Our Projects</Link>
                <Link href={''} className='text-2xl'>About</Link>
            </nav>

            <section className='bg-white w-[60%] mx-auto py-40 gap-10 flex items-center justify-center flex-col font-light'>
                <p className='text-5xl'>Hi, We Are</p>
                <p className='text-8xl'>Creative S<span className='underline'>pace</span></p>
            </section>
        </main>
    )
}
