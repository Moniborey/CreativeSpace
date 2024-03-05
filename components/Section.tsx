import { ReactNode } from "react"

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
    <div id={id} className={`relative py-10 lg:py-32 xl:py-40  ${className || ''}`}>
      {children}
    </div>
  )
}
