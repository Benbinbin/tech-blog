module.exports = (options, ctx) => {
  let pagesOptions = [{
    path: `/posts-list/`,
    frontmatter: {
      layout: 'ListLayout',
      sidebar: false,
      site: 'all',
      omitList: true
    }
  }];
  options.pages.forEach(item => {
    pagesOptions.push({
      path: `/posts-list/${item}.html`,
      frontmatter: {
        layout: 'ListLayout',
        sidebar: false,
        site: item,
        omitList: true
      }
    })
  });

  return {
    additionalPages: pagesOptions
  }
}