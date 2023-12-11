import React from 'react'
// 基本信息
export const basicData = [
  {
    title: 'len.liu0614@gmail.com',
    icon: 'mail',
  },
  {
    title: 'len-0614',
    icon: 'wechat',
  },
//   {
//     title: '13030602110',
//     icon: 'phone',
//   },
]
// 优势
export const excellentData = [
  {
    title:
      '平时工作中有注意补齐原生js相关概念与知识点, 计算机基础, 数据结构与算法, 网络相关还在持续学习当中.',
    content: '',
  },
  {
    title:
      '熟悉 React/Vue 全家桶, 维护过一整套的 UI 组件库, 承担了项⽬技术选型, 项⽬架构, 跨团队协同, 推⾏前端⼯程化, 会封装适⽤于团队项⽬的脚⼿架⼯具',
    content: '',
  },
  {
    title: '伴随着一家公司从200人成长为业内 TOP3 的经历，带过团队, 做过项目和技术 owner,解决项目中的卡点，推进项目解决业务问题, 平时工作中比较有项目 owner 意识。',
    content: '',
  },
  {
    title:
      '具有较强的自学能力, 技术栈基本属于自己看文档学习到的, 有较强的问题解决能力, 能够快速定位问题, 通过搜索引擎找到解决方案.',
    content: '',
  },
  {
    title:
      '有过 PC/H5/混合开发 项目经验, 搭建过项目脚手架, 项目开发中善于利用技术提高开发效率.',
    content: '',
  },
  {
    title: '平时喜欢钻研技术, 逐步在了解和掌握后端技术栈和运维相关技术.',
    content: '',
  },
]
// 工作经历
export const workData = [
  {
    name: '参与 SocialFi 项目',
    title: '项目制-前端开发',
    time: '2022.09 - 2023.09',
    jobs: [
      {
        title: (
          <span>
            <a href="https://web3edu.xyz/profile">web3 的 dapp</a> &nbsp;
            <a href="https://alpha.talentre.com/home/referral">
              web3 的 talentre
            </a>
          </span>
        ),
        role: '项目的搭建, 框架的引入, ui组件库的主题改造, 合约的调用',
        techStack: [
          'Web3js',
          'Material-Ui',
          'Wagmi',
          'React',
          'Redux',
          'React-Router',
        ],
      },
      {
        title: <span>若干自由职业接的前端开发</span>,
      },
    ],
  },
  // bybit
  {
    name: '上海亿锦 (bybit)',
    title: '前端开发',
    tip: '伴随一家所从200人成长为业内top3的经历',
    time: '2020.03 - 2022.09',
    jobs: [
      {
        title: (
          <span>
            核心交易站:&nbsp;
            <a href="https://www.bybit.com/trade/inverse/BTCUSD">反向交易站</a>
            &nbsp;
            <a href="https://www.bybit.com/trade/usdt/BTCUSDT">正向交易站</a>
            &nbsp;重构, 性能优化, 业务迭代.
          </span>
        ),
        role: '担任业务技术owner, 项目的搭建, 自研组件库的维护, 性能优化, 数据流管理, 网络请求封装',
        techStack: [
          'React/Redux',
          'Webpack/Node',
          'React-Router',
          'ImmerJs',
          'Less+Css-Modules',
        ],
      },
      {
        title: <span>运营平台架构, 业务迭代.</span>,
        role: '整个业务线技术项目owner, 项目的搭建, 自研组件库的维护, 性能优化, 数据流管理, 网络请求封装.',
        techStack: [
          'React/Redux',
          'Webpack/Node',
          'React-Router',
          'ImmerJs',
          'Less+Css-Modules',
        ],
      },
      {
        title: (
          <span>
            <a href="https://www.bybit.com">官网</a> 维护, 活动页开发
          </span>
        ),
        role: '空投活动技术项目owner, 动效的开发, 数据流管理, 公共组件库的开发',
        techStack: [
          'React/Redux/NextJs',
          'Webpack/Node',
          'React-Router',
          'ImmerJs',
          'Less+Css-Modules',
        ],
      },
      // SEO 相关
      {
        title: (
          <span>
            <a href="https://www.bybit.com">官网</a>和交易站 配合 SEO 引流和 google 投放
          </span>
        ),
        role: '服务端渲染 NextJs, Helmet 配合SEO部门修改关键字利于搜索引擎爬取',
        techStack: [
          'React/Redux/NextJs',
          'Webpack/Node',
          'React-Router',
          //  SEO
          'Helmet',
          'Robot.txt',
          'SiteMap.xml',
        ],
      },
    ],
  },
  {
    name: '江苏五一互联电子商务有限公司',
    title: '前端开发',
    time: '2018.08 - 2020.03',
    jobs: [
      {
        title: '运营管理后台架构改造和业务迭代',
        role: '整个项目技术owner, 架构的改造, 数据流管理, 提升打包开发效率',
        techStack: [
          'React/Redux/Dva',
          'Webpack/Node/Roadhog',
          'React-Router',
          'ImmerJs',
          'Less+Css-Modules',
        ],
      },
      {
        title: '官网项目架构和开发',
        role: '整个项目技术owner, 动效的开发, 数据流管理。',
        techStack: [
          'React/Redux/NextJs',
          'Webpack/Node',
          'React-Router',
          'ImmerJs',
          'Less+Css-Modules',
        ],
      },
    ],
  },
  {
    name: '上海星合金融科技',
    title: '前端开发',
    time: '2017.12 - 2018.08',
    jobs: [
      {
        title: 'APP管理后台架构和业务迭代',
      },
      {
        title: 'APP 架构搭建与开发(React-Native)',
        role: 'React-Native 框架的搭建, 组件库, 数据管理的引入',
        techStack: [
          'React-Native',
          'React-Navigation',
          'Webpack/Node',
          'React-Router',
          'Less+Css-Modules',
        ],
      },
    ],
  },
  {
    name: '上海磐哲科技公司',
    title: '前端开发',
    time: '2016.02 - 2017.12',
    jobs: [
      {
        title: '参与唯品会人才管理项目开发',
      },
    ],
  },
  {
    name: '毕业签的国企',
    title: '国企实习生',
    time: '2014.07 - 2016.03',
    jobs: [
      {
        title: <span>实习期间自学了前端</span>,
        role: '张鑫旭的深入理解系列, 原生 JS 系列',
        techStack: ['html(5)', 'Css(3)', 'Javascript'],
      },
    ],
  },
]
// project 项目
export const projectData = [
  {
    title: (
      <span>
        核心交易站:&nbsp;
        <a href="https://www.bybit.com/trade/inverse/BTCUSD">反向交易站</a>
        &nbsp;
        <a href="https://www.bybit.com/trade/usdt/BTCUSDT">正向交易站</a>
        &nbsp; 重构和业务迭代。
      </span>
    ),
    techStack: [
      'TypeScript',
      'React/Hook/Redux',
      'WebPack+Node',
      'Less+Css-Modules',
      '自研UI组件库',
    ],
    projectInfo:
      '作为公司主要业务, 面向C端用户, 很注重用户视觉交互体验, 以及解决大行情下性能问题',
    mainJobs: [
      '1. 反向业务的重构, 参与了项目脚手架的搭建, 数据流的管理, 公共方法, 网络请求的封装, 组件库的维护.',
      '2. 参与了 下单区, 持仓区, orderBook, Kline, deepChart, 业务的迭代',
      '3. 负责持仓区聚合持仓的技术owner, 参与C端快速上币的改造, 担任运营管理端的项目owner, 快速上币功能使得上一个币对的时间和bug大大减少',
      '4. 运用社区各种技术手段优化首页加载性能和运行时性能',
      // SEO  
      '5. 官网使用 NextJs 和 Helmet 添加关键字，脚本自动生成 Robot.txt 和 SiteMap.xml 利于搜索引擎爬取'
    ],
    mainAchivements: [
      '1. http/ws 数据统一通过数据处理按照NameSpace存储到全局状态, 后续通过自定义Hook处理好逻辑, 输出给组件使用, 数据的统一处理和统一输出',
      '2. 自动上币的改造, 使得每次上一个新币对不需要修改代码, 直接页面操作, 可以快速抓住市场热点, 做到 0 bug 上币',
      '3. 持仓区的改造, 使得用户可以看到所有的持仓, 操作仓位不需要切换币对, 优化用户体验',
      '4. 打包的优化和浏览器的缓存减少白屏时间, 虚拟滚动/webWorker/懒加载/immutableData 优化运行时性能',
      '5. C端 mock 方案, 前端可以脱离后端环境开发, 大大加快前端开发效率和体验',
    ],
  },
  {
    title: <span>公司组件库:</span>,
    techStack: [
      'TypeScript',
      'React/Hook/Redux',
      'Rollup+Node',
      'Less+Css-Modules',
      'father/storyBook/dumi',
    ],
    projectInfo:
      '和UI/产品确定了色彩交互体系, 写出了一套基础组件库, 并基于基础组件封装业务组件',
    mainJobs: [
      '1. 制定组件封装原则和规范, 开发与私有包部署',
      '2. 常用组件的开发与维护, 组件库文档书写, 单元测试与发布的 PipLine',
      '3. 结合业务基于组件库封装业务组件, 方便业务快速迭代与后续的维护',
    ],
    mainAchivements: [
      '1. 根据业务扩展从 Monorepo 项⽬结构 迁移到 私有化 Npm 部署(Verdaccio)',
      '2. 结合业务, 接入数据和业务配置, 扩展成业务组件.',
      '3. 引入组件单元测试覆盖与后续流水线发布, 维护组件库文档',
    ],
  },
  {
    title: <span>前端 CLI 工具:</span>,
    techStack: [
      'TypeScript',
      'Node',
      'commander',
      'Inquirer',
      'dotenv',
      'eslint',
      'prettier',
    ],
    projectInfo:
      '维护了 React/Vue 的项目模版, 增加代码规范团队协作规范, 并发展成CLI, 可以快速开始项目。',
    mainJobs: [
      '1. 结合社区已有方案, 输出服务于自己业务的模版, 预设公共方法, layout, 快速开始一个项目',
      '2. 模版可适用于 PC/H5, 预设后台管理Layout, utils 和 请求的封装等',
    ],
    mainAchivements: [
      '1. 增加命令行交互, 从gitlab 直接 clone 模版, 后续和运维扩展了 CI/CD 相关',
      '2. 配置eslint 规则和 prettier 规则, 以及代码提交方案, 组内代码风格统一',
    ],
  },
  //   项目补充

//   {
//     title: <span>物流信息管理平台:</span>,
//     techStack: ['React', 'React-Router', 'antd', 'Redux', 'Webpack'],
//     projectInfo: '物流信息的管理',
//     mainAchivements: [
//       '1.升级了项目脚手架 roadhog->webpack4',
//       '2.抽离项目公共方法与组件, 方便快速迭代, 代码复用',
//       '3. 封装了 fetch 的全局拦截, 统一添加请求的 token, 返回错误的统一处理。',
//     ],
//   },
//   {
//     title: (
//       <span>
//         公司官网:&nbsp;
//         <a href="http://www.lan360.com/">缆360</a>
//         &nbsp;
//         <a href="http://www.51youse.com/">51有色</a>
//         &nbsp; 重构和业务迭代。
//       </span>
//     ),
//     techStack: ['React', 'React-Router', 'antd', 'Redux', 'Webpack'],
//     projectInfo:
//       '参与公司官网从0-1的开发, 从脚手架的搭建到业务的开发, 项目为了SEO, 使用了Nextjs+React+Redux+Saga+Css-Modules+antd, 制作了通用的地址选择, 用户中心, 销售订单表格等组件用于项目中, 加快了开发效率, 项目使用Helmet增加搜索权重, 用户中心可实现用户订单的查看, 下单等业务。',
//     mainAchivements: [
//       '1.手写了 site.map 的生成',
//       '2.抽离项目公共方法与组件, 方便快速迭代, 代码复用',
//       '3. 封装了 fetch 的全局拦截, 统一添加请求的 token, 返回错误的统一处理。',
//     ],
//   },
  {
    title: <span>一个电商小程序和 RN 的 客户端:</span>,
    techStack: ['React-Native', 'React-Navigation', 'Redux'],
    projectInfo: '线上电商平台',
    mainAchivements: [
      '1.完成业务的迭代与开发',
      '2.抽离项目公共方法与组件, 方便快速迭代, 代码复用',
    ],
  },
]
