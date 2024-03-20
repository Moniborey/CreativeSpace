'use client'

import React, { useRef } from 'react'
import Section from './Section'
import Image from 'next/image'
import { MouseParallax, ScrollParallax } from 'react-just-parallax'

export default function Home() {

    const parallaxRef = useRef(null)

    return (
        <Section id='home' isHscreen={false} className='lg:h-screen relative pt-28 md:pt-52 lg:pt-0 lg:grid lg:place-items-center'>
            <section ref={parallaxRef} className='bg-white z-10 relative lg:w-[65%] xl:w-[55%] mx-auto md:py-24 py-10 md:gap-5 flex items-center justify-center flex-col font-light'>
                <div className='border-[3px] md:hidden mb-5 border-black p-3 rounded-full'>
                <Image
                    src={'/logocreativespaceV1.png'}
                    alt='logo'
                    width={10000}
                    height={10000}
                    className='size-12'
                />
                </div>
                <p className='md:text-5xl text-4xl text-gray-700'>Hi, We Are</p>
                <div className='relative w-fit'>
                    <p className='lg:text-8xl md:text-7xl text-gray-800 text-5xl'>Creative S<span className='underline'>pace</span></p>
                    <ScrollParallax isAbsolutelyPositioned>
                        <Image
                            src={'/images/Vector (1).png'}
                            alt='star'
                            width={20000}
                            height={20000}
                            className='-right-5 block size-4 md:size-5 lg:size-6 top-0 absolute'
                        />
                    </ScrollParallax>
                </div>
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
                <div className="absolute lg:top-[23%] lg:left-[25%] w-0.25 -rotate-[85deg]">
                    <div
                        className={`w-4 h-4 -ml-3 -mt-3 bg-gradient-to-tr from-pink-400 to-[#1A1A32] rounded-full transition-transform duration-500 ease-out opacity-90}`}
                    />
                </div>
            </MouseParallax>
        </div>
    );
};
