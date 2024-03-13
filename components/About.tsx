import React from 'react'
import { epilogue } from './Works'
import Image from 'next/image'
import Section from './Section'
import Link from 'next/link'

export default function About() {
    return(
        <Section id='about' className=' lg:px-20 px-5 flex lg:h-screen flex-col items-center lg:flex-row '>

        <section className=' w-full flex p-5 items-'>
            <div className="flex flex-col gap-5 lg:gap-7 md:gap-10 xl:gap-9 py-5 text-lg">
                <h1 className={`${epilogue.className} text-5xl sm:text-7xl`}>About Us</h1>
                <div className='border-b pb-5 border-gray-500'>
                <h2 className={`${epilogue.className}  `}>We're a group of students passionate about building awesome websites. As a startup freelance web development team, we're here to bring your ideas to life online. </h2>
                <p className={`${epilogue.className}  `}>What sets us apart? Our fresh perspective and dedication to learning. As students, we're always eager to push boundaries and explore new possibilities.</p>
                </div>
                    
                <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-5'>
                    <div className='flex items-center'>
                        <h2 className={`${epilogue.className} w-[100px] `}> Email:</h2>
                        <h2 className={`${epilogue.className} text-lg`}>  mamlyhua@gmail.com</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2 className={`${epilogue.className} w-[100px] `}> Phone:</h2>
                        <h2 className={`${epilogue.className} text-lg`}> 017 558 580</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2 className={`${epilogue.className} w-[100px] `}> Telegram:</h2>
                        <Link href={"https://t.me/lyhuamam"} className={`${epilogue.className} text-lg underline`}> https://t.me/lyhuamam</Link>
                    </div>
                    <div className='flex items-center'>
                        <h2 className={`${epilogue.className} w-[100px] `}> Facebook:</h2>
                        <Link href={"https://www.facebook.com/profile.php?id=100077547875626"} className={`${epilogue.className} text-lg underline`}> lyyhourr</Link>
                    </div>
                    <div className='flex items-center'>
                        <h2 className={`${epilogue.className} w-[100px] `}> Instagram:</h2>
                        <Link href={"https://www.instagram.com/lyhourrr_m/?next=%2F"} className={`${epilogue.className} text-lg underline`}> lyyhour_m</Link>
                    </div>
                </div>

            </div>
        </section>
        <section className="w-full  lg:w-4/5 flex justify-center items-center lg:items-start">
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
