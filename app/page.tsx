import About from '@/components/About'
import Animation from '@/components/Animation'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Works from '@/components/Works'

export default function HomePage() {

  return (
    <>
      <div className='fixed -z-50 w-screen h-screen top-0 left-0 bg-[url(/images/heroBG.png)]' />
      <main className="mx-auto max-w-[1650px]">
        <Animation id='home'>
          <Home />
        </Animation>
        <Animation id=''>
          <Works />
        </Animation>
        <Projects />
      </main>
      <Animation id='about'>
        <About />
      </Animation>
      <Footer />
    </>
  )
}