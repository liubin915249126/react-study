
import main from '@views/home/HomeView'
import about from '@views/about/AboutView'
import timeline from '@views/timeLine/TimeLineView'
import thanos from '@views/Thanos/index.js'
import punsub from '@views/punsub/index.js'
import share from '@views/share'
import wallet from '@views/wallet'
import hook from '@views/hook';

import test from '@views/test'
import dialog from '@views/test/dialog/index.jsx'

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
    dialog
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
        children:[
           {
            name:'dialog',
            url:'dialog',
           }
        ]
    }
]


export {
    componentLink
}
export default routerConfig;