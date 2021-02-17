<template>
  <div class="h-screen w-full flex flex-col bg-gray-100">
    <Layout />
    <div class="flex-grow overflow-auto flex flex-col mt-6" ref="container">
      <div class="flex flex-col flex-grow" v-if="mode === 'list'">
        <h2
          class="text-center text-gray-800 text-5xl font-extrabold mt-10 mb-4"
        >
          {{ site.toUpperCase() }}
        </h2>
        <div class="container mx-auto px-8 flex-grow">
          <div class="border-b-2 mb-10 md:mx-10 lg:mx-20">
            <TagsList :tags="tags" :currentTag="currentTag" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div
              v-for="post in posts"
              class="relative opacity-60 hover:opacity-100 transform transition-all"
              :class="{ series: post.frontmatter.type === 'series' }"
              :key="post.path"
            >
              <div
                class="p-6 h-full bg-gray-50 border-8 border-white rounded-md shadow-md"
              >
                <a
                  :href="$withBase(post.path)"
                  target="_blank"
                  class="absolute inset-0 z-10"
                ></a>
                <h2 class="text-2xl">{{ post.title }}</h2>
                <p class="time text-gray-400 text-xs pb-4">{{ time(post) }}</p>
                <p
                  class="summary text-gray-500"
                  v-if="post.frontmatter.summary"
                >
                  {{ post.frontmatter.summary }}
                </p>
                <ul>
                  <li></li>
                </ul>
                <button
                  v-if="post.frontmatter.type === 'series'"
                  class="opacity-0 px-4 py-2 absolute right-5 bottom-5 z-20 bg-yellow-300 text-white text-sm font-semibold rounded-full shadow border-2 border-yellow-300 hover:bg-yellow-400 transition-all duration-300"
                  @click="showSeries(post.frontmatter.series)"
                >
                  查看系列
                </button>
              </div>
            </div>
          </div>
        </div>
        <BackTop
          :direction="'top'"
          :elem="'container'"
          class="sticky bottom-20 flex justify-end items-center mb-4"
        />
        <div
          class="sticky bottom-10 flex justify-end items-center mb-4"
        >
          <button class="mode-btn" @click="mode = 'nav'">
            <div
              class="p-2 flex justify-center items-center rounded-l-md bg-gray-300 text-white hover:bg-gray-600 transition-all duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span class="pl-2 hidden text-xs">切换模式</span>
            </div>
          </button>
        </div>
        <Footer />
      </div>
      <div v-if="mode === 'nav'" class="navMode relative flex-grow">
        <Navigator :site="site" :width="width" :height="height" />

        <button class="mode-btn absolute bottom-10 right-0" @click="mode = 'list'">
          <div
            class="p-2 flex justify-center items-center rounded-l-md bg-gray-300 text-white hover:bg-gray-600 transition-all duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
            <span class="pl-2 hidden text-xs">切换模式</span>
          </div>
        </button>
      </div>
    </div>

    <Modal v-if="isModalVisible" @closeModal="isModalVisible = false">
      <template v-slot:header>
        <p>{{ currentSeries }}</p>
      </template>
      <div class="series-container space-y-2 h-full overflow-y-scroll">
        <div
          v-for="post in series"
          class="relative opacity-60 hover:opacity-100 p-4 bg-gray-50 border-8 border-white rounded-md shadow-md transform transition-opacity"
          :key="post.path"
        >
          <a
            :href="post.path"
            target="_blank"
            class="absolute inset-0 z-10"
          ></a>
          <h2 class="text-lg">{{ post.title }}</h2>
          <p class="time text-gray-400 text-xs pb-4">{{ time(post) }}</p>
          <p
            class="summary text-sm text-gray-500"
            v-if="post.frontmatter.summary"
          >
            {{ post.frontmatter.summary }}
          </p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
// import Navbar from "./utils/Navbar.vue";
import Layout from "@theme/layouts/Layout.vue";
import Footer from "./utils/Footer.vue";
import Navigator from "./utils/Navigator.vue";
import TagsList from "./utils/TagsList.vue";
import Modal from "./utils/Modal.vue";
import BackTop from "./utils/BackTop.vue";

export default {
  components: {
    Layout,
    Footer,
    Navigator,
    TagsList,
    Modal,
    BackTop,
  },
  data() {
    return {
      site: "",
      mode: "list",
      posts: [],
      tags: [],
      currentTag: "",
      isModalVisible: false,
      currentSeries: "",
      series: [],
      width: 0,
      height: 0,
      resizeTimer: null,
    };
  },
  watch: {
    $route() {
      this.site = this.$page.frontmatter.site;

      if (this.$route.hash) {
        const hash = this.$route.hash.substring(1);
        this.currentTag = hash;
      } else {
        this.currentTag = "all";
      }
      this.getPosts();
      this.getTags();
    },
  },
  methods: {
    getSize() {
      this.width = this.$refs.container.clientWidth;
      this.height = this.$refs.container.clientHeight;
      // console.log(this.width, this.height);
    },
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

      this.$site.pages.forEach((post) => {
        if (
          !post.relativePath ||
          post.frontmatter.omitList ||
          post.relativPath === "README.md"
        )
          return;
        const category = post.relativePath.split("/")[0];
        if (this.site !== "all" && category !== this.site) return;
        if (
          this.currentTag !== "all" &&
          !post.frontmatter.tags.includes(this.currentTag)
        )
          return;
        this.posts.push(post);
      });
      this.posts.sort((a, b) => {
        return new Date(this.time(b)) - new Date(this.time(a));
      });
    },
    getTags() {
      this.tags = [];
      let tagsSet = new Set();
      this.$site.pages.forEach((post) => {
        if (post.frontmatter.omitList) return;
        if (post.frontmatter.tags) {
          if (this.site !== "all" && !post.frontmatter.tags.includes(this.site))
            return;
          post.frontmatter.tags.forEach((tag) => {
            tagsSet.add(tag);
          });
        }
      });

      tagsSet.delete(this.site);
      this.tags = Array.from(tagsSet);
      this.tags.unshift("all");
    },
    showSeries(val) {
      this.currentSeries = val;
      this.series = [];
      this.$site.pages.forEach((post) => {
        if (
          post.frontmatter.series &&
          post.frontmatter.series === this.currentSeries
        ) {
          this.series.push(post);
        }
      });
      this.series.sort((a, b) => {
        return new Date(this.time(b)) - new Date(this.time(a));
      });
      // console.log(this.series);
      this.isModalVisible = true;
    },
  },
  created() {
    this.site = this.$page.frontmatter.site;
    this.currentTag = "all";
    this.getPosts();
    this.getTags();
  },
  mounted() {
    this.getSize();
    window.onresize = () => {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(() => {
        this.getSize();
        // console.log(this.width, this.height);
        this.resizeTimer = null;
      }, 300);
    };
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
    top: 0px;
    bottom: 0px;
    left: 4px;
    right: 4px;
    background: rgba(196, 181, 253, 1);
    border: 8px solid white;
    border-radius: 0.375rem;
    z-index: -1;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(6px);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 8px;
    right: 8px;
    background: rgba(253, 230, 138, 1);
    border: 8px solid white;
    border-radius: 0.375rem;
    z-index: -1;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transform: translateY(12px);
  }
  &:hover {
    button {
      opacity: 1;
    }
    &::before {
      transition: all 300ms;
      transform: rotate(5deg);
    }
    &::after {
      transition: all 300ms;
      transform: rotate(-6deg);
    }
  }
}

.mode-btn {
  button:focus {
    outline: none;
  }
  &:hover {
    span {
      display: block;
    }
  }
}
</style>