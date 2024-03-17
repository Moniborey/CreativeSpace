'use client'

import React, { useRef } from 'react'
import Section from './Section'
import Image from 'next/image'
import { MouseParallax } from 'react-just-parallax'

export default function Home() {

    const parallaxRef = useRef(null)

    return (
        <Section id='home' isHscreen={false} className='lg:h-screen relative pt-28 md:pt-52 lg:pt-0 lg:grid lg:place-items-center'>
            <section ref={parallaxRef} className='bg-white z-10 relative lg:w-[65%] xl:w-[55%] mx-auto md:py-24 py-10 md:gap-5 flex items-center justify-center flex-col font-light'>
                <Image
                    src={''}
                    alt='logo'
                    width={10000}
                    height={10000}
                    className='size-12 md:hidden border mb-8'
                />
                <p className='md:text-5xl text-4xl text-gray-700'>Hi, We Are</p>
                <div className='relative w-fit'>
                    <p className='lg:text-8xl md:text-7xl text-5xl text-gray-800'>Creative S<span className='underline'>pace</span></p>
                    <Image
                        src={'/images/Vector (1).png'}
                        alt='star'
                        width={20000}
                        height={20000}
                        className='-right-5 block size-4 md:size-5 lg:size-6 top-0 absolute'
                    />
                </div>
                <Image
                    src={'/images/Star Purple.png'}
                    alt='star'
                    width={20000}
                    height={20000}
                    className='left-10 opacity-90  md:block size-9 md:size-16 top-10 absolute'
                />
            </section>
            <BackgroundStars parallaxRef={parallaxRef} />
        </Section>
    )
}

const BackgroundStars = ({ parallaxRef }: any) => {
    return (
        <div className="absolute w-full hidden h-full lg:block top-0">
            <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                <Image
                    src={'/images/Vector.png'}
                    alt='star'
                    width={20000}
                    height={20000}
                    className='lg:right-[18%] size-4 hidden md:block md:size-7 lg:size-8 lg:top-[25%] absolute'
                />
                <Image
                    src={'/images/Vector (1).png'}
                    alt='star'
                    width={20000}
                    height={20000}
                    className='lg:right-[16%] block size-4 rotate-45 md:size-5 lg:top-[30%] absolute'
                />
                <div className="absolute lg:bottom-[25%] lg:left-[20%] w-0.25 -rotate-[85deg]">
                    <div
                        className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out opacity-90}`}
                    />
                </div>
            </MouseParallax>
        </div>
    );
};
