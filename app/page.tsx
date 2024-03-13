import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Works from '@/components/Works'
import React from 'react'

export default function HomePage() {

  return (
    <div className='bg-fixed bg-[url(/images/heroBG.png)] scroll-smooth'>
      <Home />
      <Works/>
      <Projects />
    </div>
  )
}