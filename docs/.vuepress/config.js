const webpack = require('webpack')
const path = require('path')

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
            sidebar: {
                '/Python/': 
            }
        }
}
