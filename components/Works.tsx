import { Epilogue } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import Section from './Section';
export const epilogue = Epilogue({ subsets: ["latin"], weight: ["500"] });

interface whatWeDoProps{
  header:string,
  desc:string,
  img:string
}

const whatWeDo:whatWeDoProps[]=[
  {
    header:"Clean Design",
    desc:"We create clean and modern website designs that are easy on the eyes and simple to navigate.",
    img:"Rectangle 25.png"
  },
  {
    header:"Professional Portfolio",
    desc:"We can create portfolio of diverse websites for clients across different industries.",
    img:"Skills Card Icon.png"
  },
  {
    header:"Excellent Communication",
    desc:"We're here to listen to your needs and deliver a website that meets your expectations.",
    img:"Rectangle 21.png"
  },
]

export default function Works() {
  const Card = ({data}:{data:whatWeDoProps}) => (
    <div className="flex flex-col gap-5 items-center ">
      <Image
        src={`/images/${data.img}`}
        width={20000}
        height={20000}
        alt="idk"
        className='md:size-28 size-24'
      />
      <h1 className={` ${epilogue.className} text-xl lg:text-2xl whitespace-nowrap text-gray-800 font-semibold`}>{data.header}</h1>
      <p className={` ${epilogue.className} text-gray-500 text-xs md:text-sm w-4/5 text-center lg:w-3/5 px-5 md:px-0 mx-auto`}>
       {data.desc}
      </p>
    </div>
  );
  return (
    <Section id='' isHscreen={false} className='grid gap-10 bg-blend-overlay md:gap-14 lg:gap-20 mt-14 md:mt-28 lg:mt-0 lg:h-screen h-full place-content-center'>
      <h1 className={`${epilogue.className} text-4xl lg:text-5xl text-gray-800 text-center`}>What We Do</h1>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-0 w-full">
        {
          whatWeDo.map((item,i)=>(
            <Card data={item} key={i} />
          ))
        }
      </section>
    </Section>
  )
}
