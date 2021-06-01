
import main from '@views/home/HomeView'
import about from '@views/about/AboutView'
import timeline from '@views/timeLine/TimeLineView'
import thanos from '@views/Thanos/index.js'
import punsub from '@views/punsub/index.js'
import share from '@views/share'
import wallet from '@views/wallet'
import hook from '@views/hook';
import hooktest from '@views/test/hook'

import test from '@views/test'

const componentLink = {
    main,
    about,
    timeline,
    thanos,
    punsub,
    share,
    wallet,
    test,
    hook,
    hooktest
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
    },
    {
        icon:'upload',
        name:'事件订阅',
        url:'punsub',
    },
    {
        icon:'upload',
        name:'分享社媒',
        url:'share',
    },
    {
        icon:'upload',
        name:'ws推送',
        url:'wallet',
    },
    {
        icon:'upload',
        name:'hook',
        url:'hook',
    },
    {
        icon:'upload',
        name:'测试',
        url:'test',
        hide:true,
    },
    {
        icon:'upload',
        name:'测试',
        url:'hooktest',
        hide:true,
    },
]


export {
    componentLink
}
export default routerConfig;