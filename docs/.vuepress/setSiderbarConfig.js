



const PythonFirstChildren = [ 
    ['1. Python简介/', 'Python简介'] 
]


const PythonSecondChildren = [
    ['2. 安装Python/', '1. 安装Python'],
    ['2. 安装Python/1. Python解析器', '2. Python解析器']
]

const PythonThirdChildren = [
    ['3. 第一个Python程序/', '1. 第一个Python程序'],
    ['3. 第一个Python程序/1. 使用文本编辑器', '2. 使用文本编辑器']
]


/* const setPythonSiderbarConfig = () => [
    {
        title: '1. Python简介',
        children: PythonFirstChildren,
        // collapsable: false,
        // path: '1. Python简介/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    },
    {
        title: '2. 安装Python',
        children: PythonSecondChildren,
        // collapsable: false,
        // path: '2. 安装Python/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    },
    {
        title: '3. 第一个Python程序',
        children: PythonThirdChildren,
        // collapsable: false,
        // path: '3. 第一个Python程序/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    },
] */


const setPythonNestedSiderbarConfig = (title) => [
    {
        title,
        collapsable: true,
        sidebarDepth: 2,
        children: [
            {
                title: '1. Python简介',
                children: PythonFirstChildren
            },
            {
                title: '2. 安装Python',
                children: PythonSecondChildren
            },
            {
                title: '3. 第一个Python程序',
                children: PythonThirdChildren
            },
        ]
    }
]


module.exports = {
    '/Python/': setPythonNestedSiderbarConfig('Python 教程')
}