import { Epilogue } from "next/font/google";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
const epilogue = Epilogue({ subsets: ["latin"], weight: ["500"] });

export default function Projects() {

  const ProjectCard = () => (
    <div className="flex flex-col gap-3">
      <Image
        src={"/images/pophorn.png"}
        width={250}
        height={250}
        alt=""
        className="w-full h-[12rem] md:h-[15rem] lg:h-[20rem] object-cover"
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
    <Section isHscreen={false} id="projects">
      <section className="flex flex-col lg:w-[90%] gap-10 mx-auto p-5">
        <h1 className={` ${epilogue.className} text-4xl text-center lg:text-5xl`}>
          Our Works
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-16 gap-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </Section>
  );
}
