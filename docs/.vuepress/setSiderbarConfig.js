



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


const setPythonSiderbarConfig = () => [
    {
        title: '1. Python简介',
        collapsable: false,
        children: PythonFirstChildren,
        // path: '1. Python简介/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    },
    {
        title: '2. 安装Python',
        collapsable: false,
        children: PythonSecondChildren,
        // path: '2. 安装Python/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    },
    {
        title: '3. 第一个Python程序',
        collapsable: false,
        children: PythonThirdChildren,
        // path: '3. 第一个Python程序/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    },
]





module.exports = {
    '/Python/': setPythonSiderbarConfig()
}