<template>
  <div class="min-h-screen flex flex-col">
    <Navbar class="sticky top-0 bg-white" />

    <main class="flex-grow">
      <h2 class="py-10 text-5xl font-bold text-center border-0">
        {{ classification.toUpperCase() }}
      </h2>
      <div
        v-if="postsList.tags && postsList.tags.length > 0"
        class="container p-8 mx-auto flex flex-wrap space-x-4"
      >
        <a
          class="tag text-gray-400 hover:text-gray-600 text-sm font-bold"
          v-for="item of postsList.tags"
          :key="item"
          :href="`#${item}`"
          >#{{ item }}</a
        >
      </div>
      <hr class="container w-4/5 mx-auto">
      <div
        v-if="postsList.tags && postsList.tags.length > 0"
        class="container p-8 mx-auto"
      >
      <post-card v-for="item of postsList.posts" :key="item.title" :layout="layout" :post="item"></post-card>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import PostCard from "../components/PostCard.vue";
import { usePageData } from "@vuepress/client";
import { ref, reactive, toRefs } from "vue";

export default {
  components: {
    Navbar,
    Footer,
    PostCard
  },
  setup(props) {
    const data = reactive({
      classification: "",
      postsList: {},
      layout: 'grid'
    });
    const page = usePageData();

    data.classification = page.value.frontmatter.classification;
    data.postsList = page.value.postsList;

    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss">
</style>