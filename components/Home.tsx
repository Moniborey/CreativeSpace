import React from 'react'
import Section from './Section'

export default function Home() {
    return (
        <Section id='home' isHscreen={false} className='lg:h-screen lg:grid lg:place-items-center'>
            <section className='bg-white mt-32 lg:mt-0 lg:w-[65%] xl:w-[55%] mx-auto md:py-24 py-10 md:gap-5 flex items-center justify-center flex-col font-light'>
                <p className='lg:text-5xl text-4xl'>Hi, We Are</p>
                <p className='lg:text-8xl text-5xl'>Creative S<span className='underline'>pace</span></p>
            </section>
        </Section>
    )
}
