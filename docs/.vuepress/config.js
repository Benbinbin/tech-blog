module.exports = {
  lang: 'zh-CN',
  base: "/tech-blog/",
  title: "Tech Blog",
  description: 'A blog shows some of the notes I took while learning skills.',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.5/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.1.4/dist/tailwind.min.css' }],
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // css: {
    //   postcss: {
    //     plugins: [
    //       require("tailwindcss"),
    //       require("autoprefixer"),
    //     ],
    //   }
    // }
  },
  plugins: [
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
  ],
  theme: '@vuepress/default',
  themeConfig: {
    logo: '/images/Ben.png',
    themePlugins: {
      backToTop: false
    }

  },
  markdown: {
    links: {
      externalIcon: false
    }
  },
  extendsMarkdown: (md) => {
    md.use(require('@neilsustc/markdown-it-katex'))
  },
  define: {
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
  },
}