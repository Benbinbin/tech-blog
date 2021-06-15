const { createPage } = require('@vuepress/core')

const generateListPages = (options, app) => {
  let postClassifications = {
    all: {
      posts: [],
      tags: []
    }
  }
  options.postClassifications.forEach(classification => {
    postClassifications[classification] = {
      posts: [],
      tags: []
    }
  })

  return {
    name: 'vuepress-plugin-generateListPages',
    async onInitialized(app) {
      // rearrange posts to different classification type
      app.pages.forEach((page) => {
        if (!page.frontmatter.show) return
        const post = {
          title: page.title,
          path: page.path,
          pathRelative: page.htmlFilePathRelative,
          filePath: page.filePathRelative,
          tags: page.frontmatter.tags || [],
          createdTime: page.frontmatter.createdTime || null,
          updatedTime: page.frontmatter.updatedTime || null,
          date: page.frontmatter.date || null,
          summary: page.frontmatter.summary || '',
          collection: page.frontmatter.collection || '',
          collectionOrder: page.frontmatter.collectionOrder || 0,
          cover: page.frontmatter.cover || ''
        }

        postClassifications.all.posts.push(post);
        postClassifications.all.tags = [...new Set([...postClassifications.all.tags, ...page.frontmatter.tags])]

        let classification = '';
        if (page.filePathRelative) {
          classification = page.filePathRelative.split("/")[0]
        }
        if (classification in postClassifications) {
          postClassifications[classification].posts.push(post);
          postClassifications[classification].tags = [...new Set([...postClassifications[classification].tags, ...page.frontmatter.tags])]
        }
      })

      // console.log("------postClassifications------")
      // console.log(postClassifications);

      // set list page data
      let listOptions = [{
        path: '/postslist/all.html',
        frontmatter: {
          layout: 'ClassificationLayout',
          classification: 'all',
        }
      }];

      options.postClassifications.forEach(item => {
        listOptions.push({
          path: `/postslist/${item}.html`,
          frontmatter: {
            layout: 'ClassificationLayout',
            classification: item
          }
        })
      })

      // create list pages
      let listPagesPromise = []
      listOptions.forEach(option => {
        listPagesPromise.push(createPage(app, option))
      })
      const listPages = await Promise.all(listPagesPromise)

      listPages.forEach(page => {
        app.pages.push(page)
      });

    },
    extendsPageData: (page, app) => {
      // console.log("extendsPageDate");
      // console.log(page)
      if (page.frontmatter.classification) {
        return {
          postsList: postClassifications[page.frontmatter.classification]
        }
      } else {
        return {}
      }
    },
  }
}

module.exports = generateListPages