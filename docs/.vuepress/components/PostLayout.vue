<template>
  <div class="min-h-screen flex flex-col">
    <Layout class="flex-grow" />
    <BackTop
      :direction="'top'"
      class="sticky bottom-6 flex justify-end items-center mb-4"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "./utils/Footer.vue";
import Layout from "@theme/layouts/Layout.vue";
import BackTop from "./utils/BackTop.vue";

const headingsMap = {
  'H1': 1,
  'H2': 2,
  'H3': 3,
  'H4': 4,
  'H5': 5,
  'H6': 6
}

export default {
  components: {
    Layout,
    Footer,
    BackTop,
  },
  data() {
    return {
      headings: []
    };
  },
  created() {
    console.log(this.$page);
  },
  mounted() {

    const content = document.getElementsByClassName('theme-default-content')[0];
    const list = content.querySelectorAll("h1, h2, h3, h4, h5, h6");
    list.forEach(item => {
      this.headings.push({
        level: headingsMap[item.nodeName],
        id: item.id,
        text:  item.innerHTML
      })
    })
    console.log(this.headings);
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>