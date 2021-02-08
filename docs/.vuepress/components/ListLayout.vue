<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-100">
    <!-- <Navbar /> -->
    <Layout />
    <div
      class="container flex-grow mx-auto my-10 p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
    >
      <div
        v-for="post in posts"
        class="relative opacity-80 hover:opacity-100 transform transition-all"
        :class="{ series: post.frontmatter.type === 'series' }"
      >
        <div
          class="p-6 h-full bg-gray-50 border-8 border-white rounded-md hover:shadow-md"
        >
          <a
            :href="post.path"
            target="_blank"
            class="absolute inset-0 z-10"
          ></a>
          <h2 class="text-2xl">{{ post.title }}</h2>
          <p class="time text-gray-400 text-xs pb-4">{{ time(post) }}</p>
          <p class="summary text-gray-500" v-if="post.frontmatter.summary">
            {{ post.frontmatter.summary }}
          </p>
          <button
            v-if="post.frontmatter.type === 'series'"
            class="opacity-0 px-4 py-2 absolute right-5 bottom-5 z-20 bg-yellow-300 text-white text-sm font-semibold rounded-full shadow border-2 border-yellow-300 hover:bg-yellow-400 transition-all duration-300"
          >
            查看系列
          </button>
        </div>
      </div>
    </div>
    <Navigator />
    <Footer />
  </div>
</template>

<script>
// import Navbar from "./utils/Navbar.vue";
import Layout from "@theme/layouts/Layout.vue";
import Footer from "./utils/Footer.vue";
import Navigator from "./utils/Navigator.vue";

export default {
  components: {
    Layout,
    // Navbar,
    Footer,
    Navigator,
  },
  data() {
    return {
      posts: [],
    };
  },
  watch: {
    $route() {
      this.getPosts();
    },
  },
  methods: {
    time(post) {
      let date = null;
      if (post.frontmatter.date) {
        date = new Date(post.frontmatter.date);
      } else {
        date = new Date(post.lastUpdated);
      }
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    getPosts() {
      this.posts = [];
      console.log(this.$site);
      this.$site.pages.forEach((post) => {
        if (
          !post.relativePath ||
          post.frontmatter.omitList ||
          post.relativPath === "README.md"
        )
          return;
        const category = post.relativePath.split("/")[0];
        if (this.$page.frontmatter.site !== 'all' && category !== this.$page.frontmatter.site) return;
        this.posts.push(post);
      });
      this.posts.sort((a, b) => {
        return new Date(this.time(b)) - new Date(this.time(a));
      });
    },
  },
  created() {
    this.getPosts();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  border-bottom: none;
}

// $clockwise-deg: unquote(random(2) + "deg");
// $anticlockwise-deg: unquote(-random(2) + "deg");
.series {
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    bottom: -8px;
    left: -10px;
    right: -6px;
    background: rgba(196, 181, 253, 1);
    border: 8px solid white;
    z-index: -1;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 0.375rem;
    transform: rotate(2deg);
  }
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -6px;
    left: -6px;
    right: -10px;
    background: rgba(253, 230, 138, 1);
    border: 8px solid white;
    border-radius: 0.375rem;
    z-index: -1;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(-2deg);
  }
  &:hover {
    button {
      opacity: 1;
    }
  }
}
</style>