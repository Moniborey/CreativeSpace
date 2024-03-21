export type projectTypes = "fullstack" | "ui" | "frontend" | "portfolio";

export interface DatasI {
  title: string;
  img: string;
  techStacks: string[];
  url: string;
  techs: string;
  type: projectTypes;
  desc: string;
}

const Datas: DatasI[] = [
  {
    title: "Achievie",
    img: "achievie.png",
    techStacks: ["nextjs", "tailwindcss", "mongodb", "mongoose"],
    techs: "NextJs, Tailwind, MongoDB, Mongoose",
    url: "achievie.vercel.app",
    type: "fullstack",
    desc: "Achievie is a todo web app to keep your mind organized with rich supporting features such as setting priorities, calendar, overdue, grouped-based views.etc.",
  },
  {
    title: "Brainwave",
    img: "brainwave.png",
    techStacks: ["react", "tailwindcss"],
    techs: "React, Tailwind",
    url: "brainwave-lilac.vercel.app",
    type: "ui",
    desc: "A futuristic landing page with a default dark mode design.",
  },
  {
    title: "Quizzical",
    img: "quizzical.png",
    techStacks: ["nextjs", "tailwindcss"],
    techs: "NextJs, Tailwind",
    url: "quizzical-two-rosy.vercel.app",
    type: "frontend",
    desc: "Quizzical is a trivia website featuring an experimental landing page design with bright bold color. (Not finished)",
  },
  {
    title: "Travel Camp",
    img: "travelUI.png",
    techStacks: ["react", "tailwindcss"],
    techs: "React, Tailwind",
    url: "travelui-beige.vercel.app",
    type: "ui",
    desc: "A sleek looking landing page design for a travel-based website.",
  },
  {
    title: "Portfolio",
    img: "portfolio-sample.png",
    techStacks: ["nextjs", "tailwindcss"],
    techs: "NextJs, Tailwind",
    url: "portfolio-sample-drab.vercel.app",
    type: "portfolio",
    desc: "portfolio website for showing project and personal info",
  },
  {
    title: "Wallet-Watcher",
    img: "wallet-watcher.png",
    techStacks: ["nextjs", "tailwindcss", "supabase"],
    techs: "NextJs, Tailwind, Supabase, Shadcn-Ui",
    url: "wallets-watcher.vercel.app",
    type: "fullstack",
    desc: "Wallet-Watcher mission is to simplify your financial management experience. We believe that understanding and controlling your finances should be accessible to everyone.",
  },
  {
    title: "Recipebox",
    img: "recipebox.png",
    techStacks: ["nextjs", "tailwindcss"],
    techs: "NextJs, Tailwind, Shadcn-Ui, SwiperJs",
    url: "recipesboxx.netlify.app",
    type: "frontend",
    desc: "get recipe by searching or add your ingredients",
  },
//   {
//     title: "Pophorn",
//     img: "pophorn.png",
//     techStacks: ["nextjs", "tailwindcss"],
//     techs: "NextJs, Tailwind, Shadcn-Ui, SwiperJs",
//     url: "pophorn.vercel.app",
//     type: "ui",
//     desc: "movie streaming website with ui only",
//   },
  {
    title: "Flexgear",
    img: "flexgear.png",
    techStacks: ["nextjs", "tailwindcss"],
    techs: "NextJs, Tailwind",
    url: "flexgearr.vercel.app",
    type: "frontend",
    desc: "small ecommerce",
  },
];

export default Datas;
