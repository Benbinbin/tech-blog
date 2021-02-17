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
          class="sticky top-36"
        />
      </div>
    </div>
    <div
      class="catalog-btn hidden sticky bottom-16 lg:flex justify-end items-center mb-4"
    >
      <button @click="showCataglog = !showCataglog" class="focus:outline-none">
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
          <span v-show="!showCataglog" class="pl-2 hidden text-xs"
            >显示目录</span
          >
          <span v-show="showCataglog" class="pl-2 hidden text-xs"
            >关闭目录</span
          >
        </div>
      </button>
    </div>
    <BackTop
      :direction="'top'"
      class="hidden sticky bottom-6 lg:flex justify-end items-center mb-4"
    />
    <div
      class="more-btns lg:hidden sticky bottom-6 flex justify-end items-center mb-4"
      v-show="!showCataglogBottom"
    >
      <div
        class="px-1 py-2 flex justify-center items-center rounded-l-md text-white transition-all duration-500"
        :class="showBtn ? 'bg-gray-600' : 'bg-gray-300'"
      >
        <button v-show="!showBtn" @click="showBtn = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
            />
          </svg>
        </button>
        <button v-show="showBtn" @click="showBtn = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
            />
          </svg>
        </button>
        <button
          v-show="showBtn"
          class="mx-1 pl-1 border-l flex justify-center items-center"
          @click="showCataglogBottomHandler"
        >
          <span class="pl-1 text-xs">打开目录</span>
        </button>
        <button
          v-show="showBtn"
          class="mx-1 pl-1 border-l flex justify-center items-center"
          @click="scrollTop"
        >
          <span class="pl-1 text-xs">返回顶部</span>
        </button>
      </div>
    </div>
    <Footer />
    <div
      v-if="showCataglogBottom"
      class="catalog-bottom-container py-1 px-2 fixed inset-x-4 z-10 border-2 border-gray-300 rounded-full bottom-2 bg-gray-50 bg-opacity-70 flex justify-between items-center"
    >
      <button
        class="close-bottom-catalog w-7 h-7 rounded-full flex justify-center items-center bg-red-300 text-white focus:outline-none"
        @click="showCataglogBottom = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div class="slider-container flex-grow m-2">
        <vue-slider
          v-model="selectedHeading"
          :contained="true"
          :height="6"
          :adsorb="true"
          :data="headings"
          :data-value="'id'"
          :tooltip="'none'"
          @drag-end="dragEndHandler"
          @drag-start="dragStartHandler"
        >
        </vue-slider>
      </div>

      <button
        class="back-to-top w-7 h-7 rounded-full flex justify-center items-center bg-gray-400 text-white focus:outline-none"
        @click="scrollTop"
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
            d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
          />
        </svg>
      </button>
    </div>
    <div
      v-show="showTooltip"
      class="tooltip fixed inset-x-4 top-20 z-10 border bg-gray-50 bg-opacity-95 rounded-xl border-gray-300 shadow"
    >
      <CatalogTooltip :headings="headings" :selectedHeading="selectedHeading" />
    </div>
  </div>
</template>

<script>
import Footer from "./utils/Footer.vue";
import Catalog from "./utils/Catalog.vue";
import CatalogTooltip from "./utils/CatalogTooltip.vue";
import Layout from "@theme/layouts/Layout.vue";
import BackTop from "./utils/BackTop.vue";
// import component
import VueSlider from "vue-slider-component/dist-css/vue-slider-component.umd.min.js";
import "vue-slider-component/dist-css/vue-slider-component.css";

// import theme
import "vue-slider-component/theme/default.css";

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
    CatalogTooltip,
    VueSlider,
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
      selectedHeading: null,
      showCataglog: true,
      showBtn: false,
      showCataglogBottom: false,
      showTooltip: false,
      dynamicComponent: null,
    };
  },
  methods: {
    setCatalogWidth() {
      this.catalogWidth =
        (document.documentElement.clientWidth - this.content.offsetWidth) / 2;
    },
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    },
    scrollTop() {
      document.documentElement.scrollTop = 0;
      this.showBtn = false;
    },
    showCataglogBottomHandler() {
      this.showCataglogBottom = true;
      this.showBtn = false;
    },
    dragStartHandler() {
      this.showTooltip = true;
    },
    dragEndHandler() {
      this.showTooltip = false;
      const currentHeading = this.headings.find((heading) => {
        // console.log(heading);
        if (heading.id === this.selectedHeading) return true;
      });
      // console.log(currentHeading);
      this.$router.push(`#${currentHeading.id}`);
    },
  },
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

    // console.log(this.headings);

    this.setCatalogWidth();
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
          this.selectedHeading = this.activeHeading;
          this.scrollTimer = null;
        } else {
          const target = headingsList.find((heading) => {
            if (heading.offsetTop && scrollTop <= heading.offsetTop) {
              return true;
            }
          });

          this.activeHeading = target.id;
          this.selectedHeading = this.activeHeading;
          this.scrollTimer = null;
        }
      }, 300);
    };
  },
};
</script>

<style lang="scss">
/* 设置组件的主题颜色 */
// $themeColor: #60a5fa;

/* 导入主题样式 */
// @import "~vue-slider-component/lib/theme/default.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.catalog-btn:hover {
  span {
    display: block;
  }
}
</style>