<template>
  <nav class="px-4 sm:px-8 py-2 flex justify-between items-center">
    <a class="avatar p-2 hover:bg-gray-100 rounded-md" href="/">
      <img
        :src="$withBase(`/images/${avatar}`)"
        alt="avatar"
        class="w-10 h-10 rounded-full"
      />
    </a>
    <div class="classifications hidden sm:flex items-center space-x-0.5">
      <a
        class="
          p-2
          text-sm
          font-bold
          text-gray-500
          hover:text-gray-800
          hover:bg-gray-100
          rounded-md
        "
        v-for="item of classifications"
        :key="item"
        :href="$withBase(`postslist/${item.toLowerCase()}.html`)"
      >
        {{ item }}
      </a>
    </div>
    <div class="more-container sm:hidden relative">
      <button
        v-show="!showMoreModal"
        class="p-2 hover:bg-gray-100 rounded-md text-gray-500"
        @click="showMoreModal = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          />
        </svg>
      </button>
      <button
        v-show="showMoreModal"
        class="p-2 hover:bg-gray-100 rounded-md text-red-400 hover:text-red-500"
        @click="showMoreModal = false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <div
        v-show="showMoreModal"
        class="
          more-modal
          p-2
          absolute
          top-10
          right-0
          z-10
          flex flex-col
          space-y-2
          bg-gray-100
          rounded-md
          opacity-80
        "
      >
        <button
          class="
            px-4
            py-2
            text-sm
            text-center
            font-bold
            hover:text-gray-800
            hover:bg-gray-200
            rounded-md
          "
          :class="{
            'text-gray-800 bg-gray-200':
              currentClassification === item.toLowerCase(),
            'text-gray-500': currentClassification !== item.toLowerCase(),
          }"
          v-for="item of classifications"
          :key="item"
          @click="changeClassification(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { reactive, toRefs } from "vue";
import { usePageData } from "@vuepress/client";

export default {
  setup(props) {
    const data = reactive({
      currentClassification: "",
      avatar: "",
      classifications: [],
      showMoreModal: false,
      changeClassification(link) {
        window.location.href = `${link.toLowerCase()}.html`;
        this.showMoreModal = false;
      }
    });
    const page = usePageData();
    data.currentClassification = page.value.frontmatter.classification;
    data.avatar = __AVATAR__ || "";
    data.classifications = __CLASSIFICATIONS__ || [];

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style>
</style>