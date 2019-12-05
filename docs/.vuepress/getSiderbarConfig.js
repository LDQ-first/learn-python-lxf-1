


const getSiderbarConfig = (title, children) => [
    {
        title,
        collapsable: false,
        children
        // path: '/foo/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    }
]


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


module.exports = {
    '/1.Python简介/': getSiderbarConfig('1. Python简介', PythonFirstChildren),
    '/2. 安装Python/': getSiderbarConfig('2. 安装Python', PythonSecondChildren),
    '/3. 第一个Python程序': getSiderbarConfig('3. 第一个Python程序', PythonThirdChildren)
}

module.exports = {
    '/Python/': [
        
    ]
}