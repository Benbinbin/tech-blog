const { createPage } = require('@vuepress/core')

const generateListPages = (options, app) => {
  return {
    name: 'vuepress-plugin-generateListPages',
    async onInitialized(app) {
      let listOptions = [{
        path: '/postslist/all.html',
        frontmatter: {
          layout: 'PostsListLayout',
          site: 'all',
        }
      }];

      options.postsList.forEach(item => {
        listOptions.push({
          path: `/postslist/${item}.html`,
          frontmatter: {
            layout: 'PostsListLayout',
            site: item
          }
        })
      })

      const listPagesPromise = []
      listOptions.forEach(option => {
        listPagesPromise.push(createPage(app, option))
      })
      const listPages = await Promise.all(listPagesPromise)
      // console.log(listPages);
      listPages.forEach(page => {
        app.pages.push(page)
      });

      // console.log(app);
    }
  }
}

module.exports = generateListPages