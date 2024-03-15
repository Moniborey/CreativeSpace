import { Epilogue } from "next/font/google";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import Datas, { DatasI } from "@/datas/projects";
const epilogue = Epilogue({ subsets: ["latin"], weight: ["500"] });

const hashColor = {
  ui:'text-green-500',
  fullstack:'text-red-500',
  frontend:'text-blue-500'
}

export default function Projects() {

  const ProjectCard = ({project}:{project:DatasI}) => (
    <div className="flex relative flex-col gap-3">
      <div className="hover:border border-black transition-all">
        <Image
          src={`/projectimg/${project.img}`}
          width={250}
          height={250}
          alt=""
          className="w-full hover:scale-95 transition-all h-[12rem] md:h-[15rem] lg:h-[22rem]"
        />
      </div>
      <div className={` ${epilogue.className} flex gap-3 flex-col `}>
        <div className="flex justify-between items-center">
          <p className="text-xl">{project.title}</p>
          <Link target="_blank" href={`https://${project.url}`} className="hover:underline text-gray-500 text-sm">
            {project.url}
          </Link>
        </div>
        <div className="flex items-center text-gray-800 -mt-3 text-sm gap-1">
          <h1 className={`${hashColor[project.type]}`}>#</h1>
          <h1>{project.type}</h1>
        </div>
        <div className="flex items-center gap-3">
          {project.techStacks.map((stack,index)=>(
            <Image 
            key={index}
            src={`/projectimg/${stack}`}
            alt={stack}
            width={24}
            height={24}
            />
          ))}
        </div>
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
          {
            Datas.map((project,index:number)=>(
              <ProjectCard project={project} key={index}/>
            ))
          }
        </div>
      </section>
    </Section>
  );
}
