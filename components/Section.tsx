import { ReactNode } from "react"

interface SectionProps{
    id:string,
    className?:string,
    children:ReactNode
    isHscreen?:boolean
}

export default function Section({
    className,
    id,
    children,
    isHscreen=true
}:SectionProps) {


  return (
    <div
    id={id} 
    className={`relative bg-blend-soft-light ${isHscreen && 'h-screen'} ${className || ''}`}
    >
      {children}
    </div>
  )
}
