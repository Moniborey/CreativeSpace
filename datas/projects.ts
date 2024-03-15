export type projectTypes = 'fullstack' | 'ui' | 'frontend'

export interface DatasI {
    title: string,
    img:string,
    techStacks: string[],
    url: string
    techs:string
    type: projectTypes
}

const Datas: DatasI[] = [{
    title: 'Achievie',
    img:'achievie.png',
    techStacks: ['nextjs','tailwindcss','mongodb'],
    techs:"NextJs, Tailwind, MongoDB",
    url: 'achievie.vercel.app',
    type:'fullstack'
}, {
    title: 'Brainwave',
    img:'brainwave.png',
    techStacks: ['nextjs','tailwindcss'],
    techs:"Nextjs, Tailwind , ",
    url: 'brainwave-lilac.vercel.app',
    type:'ui'
},{
    title: 'Quizzical',
    img:'quizzical.png',
    techStacks: ['nextjs','tailwindcss'],
    techs:"NextJs, Tailwind,",
    url: 'quizzical-two-rosy.vercel.app',
    type:'frontend'
},{
    title: 'Auto-Loan Form (test)',
    img:'testDesignForm.png',
    techStacks: ['nextjs','tailwindcss'],
    techs:"NextJs, Tailwind",
    url: 'hlbform.vercel.app',
    type:'frontend'
},{
    title: 'Travel Camp',
    img:'travelUI.png',
    techStacks: ['nextjs','tailwindcss'],
    techs:"NextJs, Tailwind",
    url: 'travelui-beige.vercel.app',
    type:'ui'
},{
    title: 'Wallet-Watcher',
    img:'wallet-watcher.png',
    techStacks: ['nextjs','tailwindcss','supabase'],
    techs:"NextJs, Tailwind, Supabase, Shadcn-Ui",
    url: 'wallets-watcher.vercel.app',
    type:'fullstack'
},{
    title: 'Recipebox',
    img:'recipebox.png',
    techStacks: ['nextjs','tailwindcss'],
    techs:"NextJs, Tailwind, Shadcn-Ui, SwiperJs",
    url: 'recipesboxx.netlify.app',
    type:'frontend'
},{
    title: 'Pophorn',
    img:'pophorn.png',
    techStacks: ['nextjs','tailwindcss',],
    techs:"NextJs, Tailwind, Shadcn-Ui, SwiperJs",
    url: 'pophorn.vercel.app',
    type:'ui'
},{
    title: 'Flexgear',
    img:'flexgear.png',
    techStacks: ['nextjs','tailwindcss'],
    techs:"NextJs, Tailwind",
    url: 'flexgearr.vercel.app',
    type:'frontend'
}]

export default Datas