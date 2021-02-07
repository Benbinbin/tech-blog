const path = require('path');

module.exports = {
  title: "Tech Blog",
  description: "Notes written by BenThomson when learning tech skills.",
  plugins: [
    "@kawarimidoll/tailwind",
    require('./plugins/addListPage.js'),
    require('./plugins/addTime.js'),
  ],
  markdown: {
    anchor: {
      permalink: false,
    }
  },
  themeConfig: {
    author: 'BenThomson',
    logo: '/img/Ben.png',
    lastUpdated: true,
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
    ]
  },
  alias: {
    'styles': path.resolve(__dirname, './styles'),
  }
}