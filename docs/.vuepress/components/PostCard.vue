<template>
  <div
    class="card flex flex-col relative bg-gray-200 rounded-lg hover:shadow-lg transition"
  >
    <div class="card-header bg-gray-50 rounded-t-lg">
      <h3 class="px-6 py-4 text-xl font-bold">{{ post.title }}</h3>
      <div v-if="createdTime" class="px-6 flex items-center text-gray-400 space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3 h-3"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
          />
          <path
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
          />
        </svg>
        <span class="text-xs">{{ createdTime }}</span>
      </div>
    </div>
    <div class="card-body bg-gray-50 flex-grow p-6">
      <p>{{ post.description }}</p>
    </div>
    <div
      class="card-footer p-4 h-14 flex items-center overflow-x-auto space-x-2"
    >
      <a
        v-for="tag of post.tags"
        :key="tag"
        class="text-gray-400 font-bold text-xs hover:hover:text-gray-800"
        :href="`#${tag}`"
        >#{{ tag }}</a
      >
    </div>

    <a :href="$withBase(`${post.pathRelative}`)" target="_blank" class="absolute z-10 inset-0"></a>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

function formatTime(value) {
  const time = new Date(value);
  return `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()}`;
}

export default {
  props: ["layout", "post"],
  setup({layout, post}) {
    const data = reactive({
      createdTime: null,
      updatedTime: null,
    });
    if (post.date) {
      data.createdTime = formatTime(post.date);
    } else if (post.createdTime) {
      data.createdTime = formatTime(post.createdTime);
    }
    if (post.updatedTime) {
      data.updatedTime = formatTime(post.updatedTime);
    }

    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>

<style>
</style>