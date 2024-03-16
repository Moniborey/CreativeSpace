import React from 'react'
import Section from './Section'
import { epilogue } from './Works'
import Link from 'next/link'

export default function Footer() {
    return (
        <Section id='' isHscreen={false} className={`bg-gradient-to-b from-transparent via-white to-white text-gray-800 text-xl md:bg-white md:text-2xl lg:text-4xl py-10 mt-20 md:mt-28 lg:mt-0`}>
            <h1 className='text-center lg:text-7xl text-4xl md:pb-0 text-gray-800 pb-5'>Let&apos;s Connect</h1>
            <div className={`${epilogue.className}`}>
                <p className='px-5 md:px-10 md:my-10 my-5 text-base lg:text-lg text-gray-700'>Feel free to reach out to us.</p>
                <Link href={''} className='md:py-4 py-2 border-b-2 flex items-center border-black'>
                    <h1 className='md:px-10 px-5'>Facebook</h1>
                </Link>
                <Link href={''} className='md:py-4 py-2 border-b-2 flex items-center border-black'>
                    <h1 className='md:px-10 px-5'>Instagram</h1>
                </Link>
                <Link href={''} className='md:py-4 py-2 border-b-2 flex items-center border-black'>
                    <h1 className='md:px-10 px-5'>Email</h1>
                </Link>
                <p className='md:px-10 px-5 my-5 md:my-10'>[Currently] in Phnom Penh, Cambodia.</p>
            </div>
        </Section>
    )
}
