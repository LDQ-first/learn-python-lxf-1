const webpack = require('webpack')
const path = require('path')

// import getSiderbarConfig from './getSiderbarConfig'
const getSiderbarConfig = require('./getSiderbarConfig')

console.log(`getSiderbarConfig: `, getSiderbarConfig)

module.exports = {
    /* 基本配置 */
    title: 'Hello Python',
    description: 'learn Python',
    base: '/learn-python-lxf-1/',
    head: [
        ['link', {
            rel: 'icon',
            href: 'img/blue_python-logo.svg'
        }]
    ],
    host: 'localhost',
    port: 8081,
    dest: '.vuepress/dist', // 指定 vuepress build 的输出目录。
    ga: undefined,   // 提供一个 Google Analytics ID 来使 GA 生效。
    /**
     * 如果设置成 true，VuePress 将会自动生成并且注册一个 service worker，
     * 它缓存了那些已访问过的页面的内容，用于离线访问（仅在生产环境生效）。
     * 
     * 只有您能够使用 SSL 部署您的站点时才能启用此功能，
     * 因为 service worker 只能在 HTTPs 的 URL 下注册。
     * 
      */
     serviceWorker: false,
     /**
      *  提供多语言支持的语言配置。
      *  
      *  文件结构: 
      *  docs
      *  ├─ README.md
      *  ├─ foo.md
      *  ├─ nested
      *  │  └─ README.md
      *  └─ zh
      *  ├─ README.md
      *  ├─ foo.md
      *  └─ nested
      *     └─ README.md    
      * 
      *  locales: {
      *    // 键名是该语言所属的子路径
      *    // 作为特例，默认语言可以使用 '/' 作为其路径。
      *    '/': {
      *      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      *      title: 'VuePress',
      *      description: 'Vue-powered Static Site Generator'
      *    },
      *    '/zh/': {
      *      lang: 'zh-CN',
      *      title: 'VuePress',
      *      description: 'Vue 驱动的静态网站生成器'
      *    }
      *  } 
      * 
      * 
       */
      locales:  undefined,
      /**
     * 一个函数，用来控制对于哪些文件，
     * 是需要生成 <link rel="prefetch"> 资源提示的。
     * 被标记为prefetch的资源，将会被浏览器在空闲时间加载。
     * 
     * 
    */
    shouldPrefetch: () => true,
    /**
     * 指定自定义主题
     * 
     * 当值为 "foo" 时，VuePress 将会尝试去加载位于 
     * node_modules/vuepress-theme-foo/Layout.vue 的主题组件
     *
    */
    theme: undefined,
    /**
     * 为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
     * 
     */
    themeConfig: {
        nav: [

        ],
        // navbar: false,  // 禁用所有页面的导航栏
        /* 侧边栏 */
        /* sidebar: getSiderbarConfig, */
        sidebar: {
            '/Python/': [
                {
                    title: 'Python',
                    collapsable: false,
                    children: [
                        ['1. Python简介/', '1. Python简介']
                        /* '1. Python简介/' */
                    ]
                    // path: '/foo/',      // 可选的, 应该是一个绝对路径
                    // sidebarDepth: 1   // 可选的, 默认值是 1
                }
            ]
        },

        /* 显示所有页面的标题链接 */
        displayAllHeaders: true, // 默认值：false
        /* 活动的标题链接 */
        activeHeaderLinks: false, // 默认值：true
        /**
         * 内置搜索 
         * 
         * 内置搜索只会为页面的标题、h2 和 h3 构建搜索索引
         * 
         * */
        search: true,    // 默认的搜索框
        searchMaxSuggestions: 10,  // 搜索结果数量
        /**
         * Algolia 搜索 
         * 
         * 全文搜索
         * 
         * 注意
         * 不同于开箱即用的 内置搜索，
         * Algolia 搜索 需要你在使用之前将你的网站提交给它们用于创建索引。
         * 
         * */
            algolia: {
            /*  apiKey: '<API_KEY>',
                indexName: '<INDEX_NAME>' */
            },
            /**
         *  最后更新时间 
         * 
         * 使用须知
         *  由于 lastUpdated 是基于 git 的, 
         * 所以你只能在一个基于 git 的项目中启用它。
         * 
         * */
            lastUpdated: 'Last Updated', 
            /**
         * Service Worker
         * 
         * 提示
         * 请不要将本选项与 Config > serviceWorker 混淆，
         * Config > serviceWorker 是网站级别的配置，
         * 而本选项是主题级别的配置
         * 
         */
        /**
         * 刷新内容的弹窗 
         * 
         *  开启 themeConfig.serviceWorker.updatePopup 选项，
         * 将开启一个能够刷新内容的弹窗。
         * 当网站更新（即 Service Worker 更新）时，
         * 它会提供一个 refresh 按钮，允许用户立刻刷新内容。
         * 
         * 提示
         * 如果没有 refresh 按钮，
         * 新的 service worker 将在所有的 clients 关闭后才会处于活动状态。
         * 这意味着访问者在关闭你网站的所有标签之前将无法看到新内容。
         * 但是，refresh 按钮可以立即激活新的 Service Worker。
         * 
         * 
         */
        serviceWorker: {
            // updatePopup: true,  // Boolean | Object, 默认值是 undefined 
            // 如果设置为 true, 默认的文本配置将是: 
            updatePopup: { 
                message: "New content is available.", 
                buttonText: "Refresh" 
            }
            },
    }
}
