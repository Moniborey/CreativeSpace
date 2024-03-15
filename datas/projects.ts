export type projectTypes = 'fullstack' | 'ui' | 'frontend'

export interface DatasI {
    title: string,
    img:string,
    techStacks: string[],
    url: string
    type: projectTypes
}

const Datas: DatasI[] = [{
    title: 'Achievie',
    img:'achievie.png',
    techStacks: [''],
    url: 'achievie.vercel.app',
    type:'fullstack'
}, {
    title: 'Brainwave',
    img:'brainwave.png',
    techStacks: [''],
    url: 'brainwave-lilac.vercel.app',
    type:'ui'
},{
    title: 'Quizzical',
    img:'quizzical.png',
    techStacks: [''],
    url: 'quizzical-two-rosy.vercel.app',
    type:'frontend'
},{
    title: 'Auto-Loan Form (test)',
    img:'testDesignForm.png',
    techStacks: [''],
    url: 'hlbform.vercel.app',
    type:'frontend'
},{
    title: 'Travel Camp',
    img:'travelUI.png',
    techStacks: [''],
    url: 'travelui-beige.vercel.app',
    type:'ui'
},{
    title: 'Wallet-Watcher',
    img:'wallet-watcher.png',
    techStacks: [''],
    url: 'wallets-watcher.vercel.app',
    type:'fullstack'
},{
    title: 'Recipebox',
    img:'recipebox.png',
    techStacks: [''],
    url: 'recipesboxx.netlify.app',
    type:'frontend'
},{
    title: 'Pophorn',
    img:'pophorn.png',
    techStacks: [''],
    url: 'pophorn.vercel.app',
    type:'ui'
},{
    title: 'Flexgear',
    img:'flexgear.png',
    techStacks: [''],
    url: 'flexgearr.vercel.app',
    type:'frontend'
}]

export default Datas