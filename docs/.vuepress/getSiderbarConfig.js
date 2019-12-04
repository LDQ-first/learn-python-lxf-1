


const getSiderbarConfig = (title, children) => [
    {
        title,
        collapsable: false,
        children
        // path: '/foo/',      // 可选的, 应该是一个绝对路径
        // sidebarDepth: 1   // 可选的, 默认值是 1
    }
]


const PythonChildren = [
    '/',
    '/1. Python简介',
    ['/1. Python简介', '1. Python简介'] 
]



module.exports = {
    '/Python/': getSiderbarConfig('Python', PythonChildren),
    
}