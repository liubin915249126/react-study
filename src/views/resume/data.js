import React from 'react'

export const basicData = [
  {
    title: 'len.liu0614@gmail.com',
    icon: 'mail',
  },
  {
    title: 'liubin-53',
    icon: 'wechat',
  },
  {
    title: '18205556911',
    icon: 'phone',
  },
]

export const excellentData = [
  {
    title:
      '平时工作中有注意补齐原生js相关概念与知识点,计算机基础,数据结构与算法,网络相关还在持续学习当中.',
    content: '',
  },
  {
    title:
      '熟悉 React/Vue 全家桶, 维护过一整套的 UI 组件库, 承担了项⽬技术选型，项⽬架构，跨团队协同，推⾏前端⼯程化，会封装适⽤于团队项⽬的脚⼿架⼯具',
    content: '',
  },
  {
    title: '带过团队, 做过项目和技术 owner, 平时工作中比较有项目 owner 意识。',
    content: '',
  },
  {
    title:
      '具有较强的自学能力,技术栈基本属于自己看文档学习到的,有较强的问题解决能力,能够快速定位问题,通过搜索引擎找到解决方案.',
    content: '',
  },
  {
    title:
      '有过 PC/H5/混合开发 项目经验, 搭建过项目脚手架, 项目开发中善于利用技术提高开发效率.',
    content: '',
  },
  {
    title: '平时喜欢钻研技术,逐步在了解后端技术栈和运维相关技术.',
    content: '',
  },
]

export const workData = [
  {
    name: '上海亿锦 (bybit)',
    title: '前端开发',
    time: '2020.03 - 2022.09',
    jobs: [
      {
        title: (
          <span>
            核心交易站:&nbsp;
            <a href="https://www.bybit.com/trade/inverse/BTCUSD">反向交易站</a>
            &nbsp;
            <a href="https://www.bybit.com/trade/usdt/BTCUSDT">正向交易站</a>
            &nbsp;重构,性能优化,业务迭代.
          </span>
        ),
      },
      {
        title: <span>运营平台架构，业务迭代.</span>,
      },
      {
        title: (
          <span>
            <a href="https://www.bybit.com">官网</a> 维护，活动页开发
          </span>
        ),
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
      },
      {
        title: '官网项目架构和开发',
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
    techStack: ['React/Hook/Redux', 'WebPack+Node', 'less+css-modules', '自研UI组件库'],
    projectInfo: '作为公司主要业务,面向C端用户,很注重用户视觉交互体验,以及解决大行情下性能问题',
    mainJobs: [
        '1. 反向业务的重构，参与了项目脚手架的搭建，数据流的管理，公共方法，网络请求的封装，组件库的维护.',
        '2. 参与了 下单区, 持仓区, orderBook, Kline, deepChart, 业务的迭代',
        '3. 负责持仓区聚合持仓的技术owner,参与C端快速上币的改造,担任运营管理端的项目owner,快速上币功能使得上一个币对的时间和bug大大减少',
        '4. 运用社区各种技术手段优化首页加载性能和运行时性能'
    ],
    mainAchivements: [
        '1. http/ws 数据统一通过数据处理按照NameSpace存储到全局状态,后续通过自定义Hook处理好逻辑,输出给组件使用,数据的统一处理和统一输出',
        '2. 自动上币的改造, 使得每次上一个新币对不需要修改代码,直接页面操作,可以快速抓住市场热点,做到 0 bug 上币',
        '3. 持仓区的改造,使得用户可以看到所有的持仓,操作仓位不需要切换币对,优化用户体验',
        '4. 打包的优化和浏览器的缓存减少白屏时间, 虚拟滚动/webWorker/懒加载/immutableData 优化运行时性能',
        '5. C端 mock 方案, 前端可以脱离后端环境开发,大大加快前端开发效率和体验'
    ],
  },
]
