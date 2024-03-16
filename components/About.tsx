import React from 'react'
import { epilogue } from './Works'
import Image from 'next/image'
import Section from './Section'

export default function About() {
    return (
        <Section id='about' isHscreen={false} className='lg:px-20 lg:h-screen px-5 flex flex-col items-center lg:flex-row lg:gap-10 mt-14 md:mt-28 lg:mt-0'>
            <section className=' w-full flex lg:px-5'>
                <div className="flex flex-col gap-5 lg:gap-7 md:gap-10 xl:gap-9 py-5 text-base md:text-lg">
                    <h1 className={`${epilogue.className} lg:text-5xl text-gray-800 text-4xl`}>About Us</h1>
                    <ul className=' text-gray-600 list-disc pl-4 space-y-2'>
                        <li className={`${epilogue.className}  `}>We&apos;re a group of students passionate about building awesome websites. As a startup freelance web development team, we&apos;re here to bring your ideas to life online. </li>
                        <li className={`${epilogue.className}  `}>What sets us apart? Our fresh perspective and dedication to learning. As students, we&apos;re always eager to push boundaries and explore new possibilities.</li>
                    </ul>
                    <div className='w-full border border-gray-400 px-5'/> 
                </div>
            </section>
            <section className="w-full bg-white lg:w-4/5 flex justify-center items-center lg:items-start">
                <Image
                    src={"/images/Team-pana.png"}
                    width={10000}
                    height={1000}
                    alt="image"
                    className="w-[600px] "
                />
 
            </section>

        </Section>
    )
}
