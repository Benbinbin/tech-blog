const { path } = require('@vuepress/utils')

module.exports = {
  open: true,
  lang: 'zh-CN',
  base: "/tech-blog/",
  title: "Tech Blog",
  description: 'A blog shows some of the notes I took while learning skills.',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.5/dist/katex.min.css' }],
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite 打包工具的选项
    viteOptions: {
      css: {
        postcss: {
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
        }
      },
    }
  },
  plugins: [
    require('./plugins/addTime.js'),
    [require('./plugins/createHomePage.js'),
    {
      cards: [
        {
          name: "Data",
          image: "data.svg"
        },
        {
          name: "Web",
          image: "web.svg"
        },
        {
          name: "Design",
          image: "design.svg"
        },
        {
          name: "Other",
          image: "other.svg"
        },
        {
          name: "Toolbox",
          image: "toolbox.svg"
        },
      ]
    }],
    [require('./plugins/generateListPages.js'),
    {
      postClassifications: ['web', 'data', 'design', 'other']
    }],
    [require('./plugins/generateFolderPages.js'),
    {
      postFolders: ['web', 'data', 'design', 'other']
    }],
  ],
  theme: path.resolve(__dirname, './theme/index.js'),
  themeConfig: {
    navbar: false,
    sidebar: false,
    contributors: false,
    lastUpdatedText: '更新时间',
    themePlugins: {
      backToTop: false,
      nprogress: false,
    }
  },
  markdown: {
    links: {
      externalIcon: false
    }
  },
  extendsMarkdown: (md) => {
    md.use(require('@neilsustc/markdown-it-katex'), {output: 'html'})
  },
  define: {
    __BASE__: "/tech-blog/",
    __AUTHOR__: 'Ben',
    __AVATAR__: 'Ben.png',
    __SOCIAL_MEDIA__: [
      {
        name: 'email',
        logo: 'email.svg',
        url: 'mailto:benthomsonbin@gmail.com'
      },
      {
        name: 'github',
        logo: 'github.svg',
        url: 'https://github.com/Benbinbin'
      },
      {
        name: 'juejin',
        logo: 'juejin.svg',
        url: 'https://juejin.cn/user/3175045314389278/posts'
      },
      {
        name: 'dribbble',
        logo: 'dribbble.svg',
        url: 'https://dribbble.com/BinBinDesign'
      },
      {
        name: 'twitter',
        logo: 'twitter.svg',
        url: 'https://twitter.com/Benbinbin_fun'
      },
      {
        name: 'weibo',
        logo: 'weibo.svg',
        url: 'https://weibo.com/binbindesign'
      },
    ],
    __CLASSIFICATIONS__: ['All','Data', 'Web', 'Design','Other'],
    __FOLDERS__: ['Data', 'Web', 'Design','Other'],
  },
}