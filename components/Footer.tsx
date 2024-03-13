import React from 'react'
import Section from './Section'
import { epilogue } from './Works'
import Link from 'next/link'

export default function Footer() {
    return (
        <Section id='' isHscreen={false} className={`bg-white text-3xl lg:text-4xl py-10`}>
            <h1 className='text-center lg:text-7xl text-5xl'>Let&apos;s Connect</h1>
            <div className={`${epilogue.className}`}>
                <p className='px-10 my-10 text-base lg:text-lg text-gray-700'>Feel free to reach out to us.</p>
                <Link href={''} className='py-4 border-b-2 flex items-center border-black'>
                    <h1 className='px-10'>Facebook</h1>
                </Link>
                <Link href={''} className='py-4 border-b-2 flex items-center border-black'>
                    <h1 className='px-10'>Instagram</h1>
                </Link>
                <Link href={''} className='py-4 border-b-2 flex items-center border-black'>
                    <h1 className='px-10'>Email</h1>
                </Link>
                <p className='px-10 my-10'>[Currently] in Phnom Penh, Cambodia.</p>
            </div>
        </Section>
    )
}
