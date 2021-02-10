module.exports = {
  extendPageData($page) {
    const { frontmatter } = $page;

    if (!frontmatter.layout) {
      frontmatter.layout = 'PostLayout'
    }
  }
}