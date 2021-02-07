<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-100">
    <Navbar />
    <div class="container flex-grow mx-auto my-10 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div
        v-for="post in posts"
        class="card relative p-6 rounded-md opacity-50 hover:opacity-100 border-8 border-white transform hover:-translate-x-0.5 hover:shadow-md transition-all bg-gray-50"
      >
        <a :href="post.path" target="_blank" class="absolute inset-0 z-10"></a>
        <h2 class="text-2xl">{{ post.title }}</h2>
        <p class="text-gray-500">{{ time(post) }}</p>
      </div>
    </div>
    <Navigator />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Navigator from "../components/Navigator.vue";

export default {
  components: {
    Navbar,
    Footer,
    Navigator,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    time(post) {
      if (post.frontmatter.date) {
        const date = new Date(post.frontmatter.date);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      } else {
        return "undefined";
      }
    },
  },
  created() {
    this.$site.pages.forEach((post) => {
      if (post.relativePath && post.relativePath !== "README.md") {
        this.posts.push(post);
      }
    });
    console.log(this.posts);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>