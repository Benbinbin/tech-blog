<template>
  <div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import {
  useSiteData,
  useRouteLocale,
  usePageData,
  usePageFrontmatter,
} from "@vuepress/client";
import { ref, reactive, toRefs } from "vue";

export default {
  components: {
    Footer,
  },
  setup(props) {
    console.log("------useSiteData------");
    console.log(useSiteData());
    console.log("------useRouteLocale------");
    console.log(useRouteLocale());
    console.log("------usePageData------");
    console.log(usePageData());
    console.log("------usePageFrontmatter------");
    console.log(usePageFrontmatter());
    return {};
  },
};
</script>

<style lang="scss">
</style>