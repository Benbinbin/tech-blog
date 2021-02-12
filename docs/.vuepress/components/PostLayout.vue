<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex-grow">
      <Layout />
      <div
        class="catalog-container absolute top-0 right-0 h-full hidden lg:block"
        :style="{ width: `${catalogWidth}px` }"
      >
        <Catalog
          v-show="showCataglog"
          :headings="headings"
          :activeHeading="activeHeading"
          class="sticky top-40"
        />
      </div>
    </div>
    <div
      class="catalog-btn hidden sticky bottom-16 md:flex justify-end items-center mb-4"
    >
      <button @click="showCataglog = !showCataglog">
        <div
          class="p-2 flex justify-center items-center rounded-l-md bg-gray-300 text-white transition-all duration-500"
          :class="showCataglog ? 'bg-gray-600' : 'bg-gray-300'"
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
          <p v-show="!showCataglog" class="pl-2 hidden text-xs">显示目录</p>
          <p v-show="showCataglog" class="pl-2 hidden text-xs">关闭目录</p>
        </div>
      </button>
    </div>
    <BackTop
      :direction="'top'"
      class="sticky bottom-6 flex justify-end items-center mb-4"
    />
    <Footer />
  </div>
</template>

<script>
import Footer from "./utils/Footer.vue";
import Catalog from "./utils/Catalog.vue";
import Layout from "@theme/layouts/Layout.vue";
import BackTop from "./utils/BackTop.vue";

const headingsMap = {
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6,
};

export default {
  components: {
    Layout,
    Footer,
    Catalog,
    BackTop,
  },
  data() {
    return {
      headings: [],
      catalogWidth: 0,
      resizeTimer: null,
      scrollTimer: null,
      content: null,
      activeHeading: "",
      showCataglog: true,
    };
  },
  methods: {
    setCatalogWidth() {
      this.catalogWidth =
        (document.documentElement.clientWidth - this.content.offsetWidth) / 2;
      console.log(this.catalogWidth);
    },
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    },
  },
  // created() {
  //   console.log(this.$page);
  // },
  mounted() {
    this.content = document.getElementsByClassName("theme-default-content")[0];
    const list = this.content.querySelectorAll("h2, h3, h4, h5, h6");
    list.forEach((item) => {
      this.headings.push({
        level: headingsMap[item.nodeName],
        id: item.id,
        text: item.innerHTML,
      });
    });

    this.setCatalogWidth();
    // console.log(this.headings);
    // listening to window resize event and recalculate the catagory width
    window.onresize = () => {
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(() => {
        this.setCatalogWidth();
        this.resizeTimer = null;
      }, 300);
    };
    window.onscroll = () => {
      if (this.scrollTimer) {
        clearTimeout(this.scrollTimer);
      }
      this.scrollTimer = setTimeout(() => {
        const scrollTop = this.getScrollTop();
        const headingsList = Array.from(list);
        const lastHeading = headingsList[headingsList.length - 1];
        if (scrollTop >= lastHeading.offsetTop) {
          this.activeHeading = lastHeading.id;
          this.scrollTimer = null;
        }
        headingsList.find((heading) => {
          if (heading.offsetTop && scrollTop <= heading.offsetTop) {
            this.activeHeading = heading.id;
            return true;
          }
        });
        this.scrollTimer = null;
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
</style>