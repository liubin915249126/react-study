
import main from '@views/home/HomeView'
import about from '@views/about/AboutView'
import timeline from '@views/timeLine/TimeLineView'
import thanos from '@views/Thanos/index.js'

const componentLink = {
    main,
    about,
    timeline,
    thanos
}


const routerConfig = [
    {
        icon:'user',
        name:'首页',
        url:'main',
    },
    {
        icon:'video-camera',
        name:'关于',
        url:'about',
    },
    {
        icon:'upload',
        name:'时间轴',
        url:'timeline',
    },
    {
        icon:'upload',
        name:'灭霸特效',
        url:'thanos',
    }
]


export {
    componentLink
}
export default routerConfig;