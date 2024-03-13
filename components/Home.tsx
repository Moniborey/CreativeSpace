import React from 'react'
import Section from './Section'

export default function Home() {
    return (
        <Section id='home' className='lg:h-screen pt-44 flex flex-col gap-12'>
            <section className='bg-white w-[90%] lg:w-[55%] m-auto xl:py-40 lg:py-32 md:py-24 py-10 md:gap-5 flex items-center justify-center flex-col font-light'>
                <p className='lg:text-5xl text-4xl'>Hi, We Are</p>
                <p className='lg:text-8xl text-5xl'>Creative S<span className='underline'>pace</span></p>
            </section>
        </Section>
    )
}
