'use client'

import { ReactNode, useRef } from "react"
import { MotionDiv } from "./MotionDiv"
import { useInView } from "framer-motion"

interface SectionProps{
    id:string,
    className?:string,
    children:ReactNode
}

export default function Section({
    className,
    id,
    children
}:SectionProps) {

  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  return (
    <MotionDiv
    ref={ref}
    initial={{ opacity: 0, x: 20 }} 
    whileInView={{opacity:1, x:0}}
    transition={{easings:['easeIn'],duration:0.4}}
    id={id} 
    className={`relative py-10 section lg:py-32 xl:py-40 overflow-hidden ${className || ''}`}
    >
      {children}
    </MotionDiv>
  )
}
