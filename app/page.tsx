import About from '@/components/About'
import Animation from '@/components/Animation'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Works from '@/components/Works'

export default function HomePage() {

  return (
    <div className='bg-fixed bg-[url(/images/heroBG.png)] scroll-smooth'>
      <main className="mx-auto max-w-[1650px]">
      <Animation id=''>
        <Home />
      </Animation>
      <Animation id=''>
        <Works />
      </Animation>
      <Projects />
      </main>
      <Animation id=''>
        <About />
      </Animation>
      <Footer />
    </div>
  )
}