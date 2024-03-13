import { Epilogue } from "next/font/google";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import MotionDiv from "./MotionDiv";
const epilogue = Epilogue({ subsets: ["latin"], weight: ["500"] });



export default function Projects() {
 
  const ProjectCard = () => (
    <div className="flex flex-col gap-3">
      <Image
        src={"/images/pophorn.png"}
        width={250}
        height={250}
        alt=""
        className="w-full h-[15rem] md:h-[20rem] object-cover"
      />
      <div className={` ${epilogue.className} flex gap-3 flex-col `}>
        <div className="flex justify-between items-center">
          <p className="text-xl">Flex Gear</p>
          <Link href={"/"} className="underline text-sm ">
            website url
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Tech Stack: nextjs,nextjs,nextjs
        </p>
      </div>
    </div>
  );
  return (
    <Section id="projects" className="snap-start">
      <main className="flex flex-col gap-32">
        <section className="flex flex-col lg:px-40 p-5">
          <h1 className={` ${epilogue.className} text-3xl text-center md:text-4xl`}>
            Our Works
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10 gap-5">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </main>
    </Section>
  );
}
