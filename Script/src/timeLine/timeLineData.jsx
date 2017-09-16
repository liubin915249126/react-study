/**
 * @property {array} timeLine 生成时间轴的数据
 * @property {string} timeLine.label 标题
 * @property {number} timeLine.status 状态
 * @property {array} timeLine.buttons 对应的按钮
 * @property {array} timeLine.links 对应的链接
 */

const timeLine = [
     {
        label:'退出',
        status:0,
        buttons:[
            {
             text:"发布",
             target:1 
            }
        ],
        links:[
            { text: '导入', target: '/main/importExcel', icon:'icon-daoru'},
            { text: '导出', target: '/main/exportExcel', icon: 'icon-daochu' },  
              ]
     },
    {
        label:'已发布',
        status:1,
        buttons:[
            {
             text:"取消发布",
             target:0 
            },
            {
             text:"核算",
             target:2 
            }
        ],
        links:[
            { text: '数据查看', target: '/main/PayrollMain', icon: 'icon-shujuchakan' }
        ]
     },
     {
        label:'核算中',
        status:2,
        buttons:[
            {
             text:"检查结果",
             target:3 
            }
        ]
     },
     {
        label:'结果检查中',
        status:3,
        buttons:[
            {
             text:"改正数据",
             target:4 
            },
            {
             text:"提交审批",
             target:5 
            }
        ],
        links: [
            { text: '报表查询', target: '/main/PayrollReportB14', icon: 'icon-baobiaochaxun' }
        ]
     },
     {
        label:'数据更正中',
        status:4,
        hlines:[{index:1},{index:2}],
        buttons:[
            {
             text:"发布",
             target:1 
            }
        ]
     },
     {
        label:'审核中',
        status:5,
        buttons:[
            {
             text:"返回检查",
             target:3
            },
            {
             text:"审核通过",
             target:0
            }
        ],
        links: [
            {
             text: '银行转账', target: '', icon: 'icon-yinhangzhuanzhang1' },
            { text: '工资单打印', target: '', icon: 'icon-gongzidandayin' },
            { text: '报税操作', target: '', icon: 'icon-baoshuiguanli' },
            { text: '社保缴纳', target: '', icon: 'icon-shebaojiaona' }
        ]
     },
]

export {timeLine}