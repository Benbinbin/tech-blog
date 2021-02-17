const path = require('path');

module.exports = {
  base: "/tech-blog/",
  title: "Tech Blog",
  description: "Notes written by BenThomson when learning tech skills.",
  plugins: [
    "@kawarimidoll/tailwind",
    '@vuepress/back-to-top',
    [
      require('./plugins/generateListPages.js'),
      {
        pages: ['web', 'data', 'design', 'other']
      }
    ],
    require('./plugins/addTag.js'),
    require('./plugins/useLayout.js'),
  ],
  markdown: {
    anchor: {
      permalink: false,
    }
  },
  themeConfig: {
    author: 'BenThomson',
    avatar: '/img/Ben.png',
    // navbar: true,
    lastUpdated: '更新时间',
    sidebar: false,
    socialMedia: [
      {
        name: 'email',
        logo: '/img/email.svg',
        url: 'mailto:mebeansbin@gmail.com'
      },
      {
        name: 'github',
        logo: '/img/github.svg',
        url: 'https://github.com/Benbinbin'
      },
      {
        name: 'juejin',
        logo: '/img/juejin.svg',
        url: 'https://juejin.cn/user/3175045314389278/posts'
      },
      {
        name: 'dribbble',
        logo: '/img/dribbble.svg',
        url: 'https://dribbble.com/BinBinDesign'
      },
      {
        name: 'twitter',
        logo: '/img/twitter.svg',
        url: 'https://twitter.com/Benbinbin_fun'
      },
      {
        name: 'weibo',
        logo: '/img/weibo.svg',
        url: 'https://weibo.com/binbindesign'
      },
    ],
    nav: [
      { text: 'All', link: '/posts-list/index.html' },
      { text: 'Data', link: '/posts-list/data.html' },
      { text: 'Web', link: '/posts-list/web.html' },
      { text: 'Design', link: '/posts-list/design.html' },
      { text: 'Other', link: '/posts-list/other.html' },
    ]
  },
  alias: {
    'styles': path.resolve(__dirname, './styles'),
  }
}