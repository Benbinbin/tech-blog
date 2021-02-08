<template>

</template>

<script>
export default {
  data() {
    return {
      tags: [],
    };
  },
  created() {
    let tagsSet = new Set();
    this.$site.pages.forEach((post) => {
      if (post.frontmatter.tags) {
          post.frontmatter.tags.forEach(tag => {
              tagsSet.add(tag)
          })
      }
    });
  },
};
</script>

<style>
</style>