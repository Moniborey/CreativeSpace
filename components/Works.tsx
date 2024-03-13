import { Epilogue } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
export const epilogue = Epilogue({ subsets: ["latin"], weight: ["500"] });

export default function Works() {
  const Card = ({ img }: { img: string }) => (
    <div className="flex flex-col gap-5 items-center ">
      <Image
        src={img}
        width={100}
        height={100}
        alt="idk"
      />
      <h1 className={` ${epilogue.className} text-2xl font-semibold`}>Title</h1>
      <p className="text-gray-500 text-sm w-4/5 md:w-3/5 px-5 md:px-0 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quas
        asperiores velit voluptatem eius. Quaerat quod corrupti cum ipsam
        laborum, nulla ullam beatae, soluta quia, maiores similique expedita
        quibusdam! Praesentium?
      </p>
    </div>
  );
  return (
    <main className='flex flex-col gap-10 items-center justify-center '>
      <h1 className={`${epilogue.className} text-3xl md:text-4xl text-center`}>What We Do</h1>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-0 w-full mt-5 lg:mt-20">
        <Card img="/images/Rectangle 25.png" />
        <Card img="/images/Rectangle 21.png" />
        <Card img="/images/Skills Card Icon.png" />
      </section>
    </main>
  )
}
