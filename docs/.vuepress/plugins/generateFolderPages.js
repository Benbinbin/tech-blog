const { createPage } = require('@vuepress/core');

function getLocation(array, key, value) {
  let t = 0; // t is used as a counter
  while (t < array.length && array[t][key] !== value) {
    t++;
  }

  if (t < array.length) {
    return array[t];
  } else {
    return false;
  }
}

function buildPostsTree(rootName, postsList) {
  let tree = {
    name: rootName,
    children: [],
    type: 'root',
  }

  postsList.forEach((post) => {
    const paths = post.filePathRelative.split("/").slice(1);
    const mdReg = /\.md$/;
    let currentLevel = tree.children;
    paths.forEach((path) => {
      let existingPath = getLocation(currentLevel, "name", path);

      if (existingPath) {
        currentLevel = existingPath.children;
      } else if (mdReg.test(path)) {
        const newPath = {
          name: path,
          data: post,
          type: 'post',
        };
        currentLevel.push(newPath);
      } else {
        const newPath = {
          name: path,
          children: [],
          type: 'folder',
        };

        currentLevel.push(newPath);
        currentLevel = newPath.children;
      }
    });
  });

  return tree;
}


const generateFolderPages = (options, app) => {
  let postFolders = {}
  options.postFolders.forEach(folder => {
    postFolders[folder] = {
      postsTree: {},
      posts: [],
      tags: []
    }
  })

  return {
    name: 'vuepress-plugin-generateFolderPages',
    async onInitialized(app) {
      // rearrange posts to different folder
      app.pages.forEach((page) => {
        let folder = '';
        if (page.filePathRelative) {
          folder = page.filePathRelative.split("/")[0]
          if (!(folder in postFolders)) return
        } else {
          return
        }

        console.log(page);

        const post = {
          title: page.title,
          path: page.path,
          pathRelative: page.htmlFilePathRelative,
          filePathRelative: page.filePathRelative,
          tags: page.frontmatter.tags || [],
          createdTime: page.frontmatter.createdTime || null,
          updatedTime: page.frontmatter.updatedTime || null,
          date: page.frontmatter.date || null,
          collection: page.frontmatter.collection || '',
          collectionOrder: page.frontmatter.collectionOrder || 0,
        }

        postFolders[folder].posts.push(post);
        postFolders[folder].tags = [...new Set([...postFolders[folder].tags, ...post.tags])]
      })

      options.postFolders.forEach(folder => {
        postFolders[folder].postsTree = buildPostsTree(folder, postFolders[folder].posts)
      })

      // set folder page data
      let folderOptions = [];

      options.postFolders.forEach(item => {
        folderOptions.push({
          path: `/folder/${item}.html`,
          frontmatter: {
            layout: 'FolderLayout',
            folder: item
          }
        })
      })

      // create folder pages
      let folderPagesPromise = []
      folderOptions.forEach(option => {
        folderPagesPromise.push(createPage(app, option))
      })
      const folderPages = await Promise.all(folderPagesPromise)

      folderPages.forEach(page => {
        app.pages.push(page)
      });

    },
    extendsPageData: (page, app) => {
      if (page.frontmatter.folder) {
        return {
          postsData: postFolders[page.frontmatter.folder]
        }
      } else {
        return {}
      }
    },
  }
}

module.exports = generateFolderPages