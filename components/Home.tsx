import React from 'react'
import Section from './Section'

export default function Home() {
    return (
        <Section id='home' className='h-screen section flex flex-col gap-12 snap-start '>
            <section className='bg-white lg:w-[55%] m-auto xl:py-40 lg:py-32 md:py-24 py-20 gap-5 flex items-center justify-center flex-col font-light'>
                <p className='text-5xl'>Hi, We Are</p>
                <p className='text-8xl'>Creative S<span className='underline'>pace</span></p>
            </section>
        </Section>
    )
}
