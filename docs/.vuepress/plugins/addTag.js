module.exports = {
  extendPageData($page) {
    const { frontmatter, regularPath } = $page;
    const category = regularPath.split('/')[1];
    if (frontmatter.omitList || (frontmatter.tags && frontmatter.tags.includes(category))) return
    if (frontmatter.tags && !frontmatter.tags.includes(category)) {
      frontmatter.tags.push(category);
    } else {
      frontmatter.tags = [category];
    }
  }
}