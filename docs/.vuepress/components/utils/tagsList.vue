<template>
  <div>
    <ul class="flex flex-wrap">
      <li v-for="tag of tags" class="mr-6 mb-6">
        <a
          :href="tag=== 'all' ? '#' : `#${tag}`"
          class="font-bold hover:text-gray-800"
          :class="tagColor(tag)"
          >{{ `#${tag}` }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tags', 'currentTag'],
  data() {
    return {
    };
  },
  methods: {
    tagColor(tag) {
      return tag === this.currentTag ? "text-gray-800" : "text-gray-400";
    },
  },
};
</script>

<style>
</style>