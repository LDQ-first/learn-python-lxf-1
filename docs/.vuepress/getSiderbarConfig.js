





const PythonFirstChildren = [
    '/'
    /* ['/', '1. Python简介']  */
]

const PythonSecondChildren = [
    ['/', '2. 安装Python'],
    ['/2. Python解析器', '2. Python解析器']
]

const PythonThirdChildren = [
    ['/', '3. 第一个Python程序'],
    ['/2. 使用文本编辑器', '2. 使用文本编辑器']
]


const getSiderbarConfig = (title) => [
    {
        title,
        collapsable: false,
        children: [
            PythonFirstChildren,
            PythonSecondChildren,
            PythonThirdChildren
        ]
        // path: '/foo/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    }
]

module.exports = {
    '/Python/': [
        {
            title: 'Python',
            collapsable: false,
            
        }
    ]
}