import React from 'react'
import { epilogue } from './Works'
import Image from 'next/image'
import Section from './Section'

export default function About() {
    return (
        <Section id='about' className='lg:px-20 px-5'>
            <h1 className={`${epilogue.className} text-3xl md:text-4xl text-center`}>About Us</h1>
            <section className="flex w-full lg:flex-row flex-col-reverse">
                <div className='w-full mt-10'>
                    <Image
                        src={'/images/Team-pana.png'}
                        alt='aboutIMG'
                        width={1000}
                        height={1000}
                        className='w-full h-full'
                    />
                </div>
                <div className='w-full'>hi</div>
            </section>
        </Section>
    )
}
