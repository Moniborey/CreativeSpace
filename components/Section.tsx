
import { ReactNode } from "react"
import Animation from "./Animation"

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


  return (
    // <Animation id="">
    <div
    id={id} 
    className={`relative py-10 section lg:py-32 xl:py-40 overflow-hidden ${className || ''}`}
    >
      {children}
    </div>
      // </Animation>
  )
}
