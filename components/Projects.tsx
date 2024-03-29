import { Epilogue } from "next/font/google";
import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import Datas, { DatasI } from "@/datas/projects";
const epilogue = Epilogue({ subsets: ["latin"], weight: ["500"] });

const hashColor = {
  ui: "text-green-500",
  fullstack: "text-red-500",
  frontend: "text-blue-500",
  portfolio: "text-purple-500",
};

export default function Projects() {
  const ProjectCard = ({ project }: { project: DatasI }) => (
    <div className="flex flex-col gap-3 md:hover:scale-[1.01] duration-300">
      <div className="group relative">
        <Image
          src={`/projectimg/${project.img}`}
          width={2500000}
          height={2500000}
          alt=""
          className="w-full h-[12rem] transition-all sm:h-[20rem] md:h-[22rem] lg:h-[16rem] xl:h-[22rem]"
        />
        <div className="duration-500 bg-gradient-to-t from-gray-800 to-transparent group-hover:opacity-100 opacity-0 md:block hidden transition-all bottom-0 text-white min-h-0 group-hover:min-h-full w-full absolute">
          <div className="flex flex-col h-[12rem] text-gray-100 md:h-[21.5rem] lg:h-[16rem] xl:h-[22rem] justify-end w-full px-3 -mt-4">
            <h1 className={`${epilogue.className} tracking-wide text-2xl mb-3`}>Overview</h1>
            <p className={`${epilogue.className}`}>{project.desc}</p>
          </div>
        </div>
      </div>
      <div className={` ${epilogue.className} flex gap-3 flex-col `}>
        <div className="flex justify-between items-center">
          <p className="text-base md:text-xl">{project.title}</p>
          <Link
            target="_blank"
            href={`https://${project.url}`}
            className="underline underline-offset-2 text-gray-500 text-sm"
          >
            {project.url}
          </Link>
        </div>
        <div className="flex items-center text-gray-500 -mt-3 text-xs md:text-sm gap-1">
          <h1 className={`${hashColor[project.type]}`}>#</h1>
          <h1>
            {project.type}
          </h1>
        </div>
        <p className="text-gray-600 text-sm md:hidden">
          {project.desc}
        </p>
        <div className="md:flex hidden items-center gap-1">
          <p className="md:text-sm text-xs text-gray-600">Built With :</p>
          <p className="text-xs text-gray-500 ">{project.techs}</p>
        </div>
      </div>
    </div>
  );
  return (
    <Section isHscreen={false} id="projects" className="mt-14 md:mt-28 lg:mt-0">
      <section className="flex flex-col sm:max-w-[700px] lg:max-w-max gap-10 md:gap-14 lg:gap-20 mx-auto px-5 bg-blend-lighten">
        <h1
          className={` ${epilogue.className} text-4xl text-center text-gray-800 lg:text-5xl`}
        >
          Our Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {Datas.map((project, index: number) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </section>
    </Section>
  );
}
