<template>
  <div class="min-h-screen flex flex-col">
    <Navbar class="sticky top-0 z-50 bg-white" />

    <main class="flex-grow">
      <h2 class="py-10 text-5xl font-bold text-center border-0">
        {{ classification.toUpperCase() }}
      </h2>
      <div
        v-if="postsList.tags && postsList.tags.length > 0"
        class="container p-10 mx-auto flex flex-wrap space-x-4"
      >
        <a
          class="tag text-gray-400 hover:text-gray-600 text-sm font-bold"
          v-for="item of postsList.tags"
          :key="item"
          :href="`#${item}`"
          >#{{ item }}</a
        >
      </div>
      <hr class="container w-4/5 mx-auto" />
      <div class="container p-10 mx-auto flex justify-between">
        <div class="space-x-2">
          <button
            class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            :class="{
              'text-blue-500': layout === 'grid',
              'text-gray-500': layout !== 'grid',
            }"
            title="网格布局"
            @click="setLayout('grid')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
              />
            </svg>
          </button>
          <button
            class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            :class="{
              'text-blue-500': layout === 'masonry',
              'text-gray-500': layout !== 'masonry',
            }"
            title="瀑布流式布局"
            @click="setLayout('masonry')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z"
              />
            </svg>
          </button>
          <button
            class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            :class="{
              'text-blue-500': layout === 'list',
              'text-gray-500': layout !== 'list',
            }"
            title="列表布局"
            @click="setLayout('list')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          </button>
        </div>
        <div class="space-x-2">
          <button
            class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            :class="{
              'text-blue-500': sortType === 'ascend',
              'text-gray-500': sortType !== 'ascend',
            }"
            title="旧发表的文章在前"
            @click="setSortType('ascend')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"
              />
              <path
                fill-rule="evenodd"
                d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path
                d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"
              />
            </svg>
          </button>
          <button
            class="p-2 bg-gray-100 hover:bg-gray-200 rounded"
            :class="{
              'text-blue-500': sortType === 'descend',
              'text-gray-500': sortType !== 'descend',
            }"
            title="新发表的文章在前"
            @click="setSortType('descend')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"
              />
              <path
                d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-if="postsList.posts && postsList.posts.length > 0"
        id="cards-container"
        class="container p-8 mx-auto"
        :class="{
          'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8':
            layout === 'grid',
        }"
      >
        <post-card
          :class="{ 'grid-item': layout === 'masonry' }"
          v-for="item of postsList.posts"
          :key="item.title"
          :layout="layout"
          :post="item"
        ></post-card>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, watch, nextTick } from "vue";
import Masonry from "masonry-layout";
import { usePageData, useRouteLocale } from "@vuepress/client";

import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import PostCard from "../components/PostCard.vue";

// masonry layout
function createMasonryLayout(container, item) {
  console.log("masonry initilized");
  return new Masonry(container, {
    itemSelector: item,
    gutter: 28,
    horizontalOrder: true,
  });
}

export default {
  components: {
    Navbar,
    Footer,
    PostCard,
  },
  setup(props) {
    const data = reactive({
      classification: "",
      postsList: {},
      layout: "grid",
      sortType: "descend",
      masonry: null,
      setLayout(value) {
        if (data.layout === "masonry" && data.masonry) {
          data.masonry.destroy();
          data.masonry = null;
          console.log("masonry destroyed");
        }

        localStorage.setItem("layout", value);
        data.layout = value;

        if (value === "masonry") {
          nextTick(() => {
            data.masonry = createMasonryLayout(
              "#cards-container",
              ".grid-item"
            );
          });
        }
      },
      setSortType(value) {
        localStorage.setItem("sortType", value);
        data.sortType = value;
      },
    });

    // layout
    if (localStorage.getItem("layout")) {
      data.layout = localStorage.getItem("layout");
    } else {
      localStorage.setItem("layout", "grid");
    }
    if (localStorage.getItem("sortType")) {
      data.sortType = localStorage.getItem("sortType");
    } else {
      localStorage.setItem("sortType", "descend");
    }

    onMounted(() => {
      if (data.layout === "masonry") {
        data.masonry = createMasonryLayout("#cards-container", ".grid-item");
      }
      console.log(data.masonry);
    });

    watch(data.layout, (newValue, oldValue) => {
      // if (newValue === "masonry") {
      //   // this.$nextTick(() => {
      //   //   this.setMasonryControllers();
      //   // });
      //   data.masonry = createMasonryLayout(".cards-container", ".grid-item");
      // } else if (oldValue === "masonry") {
      //   // this.masonryControllers.forEach((masonry) => {
      //   //   masonry.destroy();
      //   //   this.$nextTick(() => {
      //   //     this.setQuotesWidth();
      //   //   });
      //   // });
      //   data.masonry.destroy();
      // }
      console.log(data.masonry);
    });

    const page = usePageData();
    // const route = useRouteLocale();
    // console.log(route);

    data.classification = page.value.frontmatter.classification;
    data.postsList = page.value.postsList;

    const refData = toRefs(data);

    return {
      ...refData,
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  width: calc(100% - 4rem)
}

// breakpoint: sm
// 2 cols
@media (min-width: 640px) {
  .grid-item {
    width: calc(50% - 14px - 2rem)
  }
}

// breakpoint: xl
// 3 cols
@media (min-width: 1280px) {
  .grid-item {
    width: calc(33% - 20px - 1.5rem)
  }
}

// breakpoint: 2xl
// 4 cols
@media (min-width: 1536px) {
  .grid-item {
    width: calc(25% - 21px - 1rem)
  }
}

.grid-item {
  margin-bottom: 28px;
}
</style>