<template>
  <footer
    class="bg-gray-300 w-full p-10 flex flex-col md:flex-row justify-between items-center"
  >
    <button class="relative">
      <a href="/" class="absolute top-0 right-0 w-full h-full"></a>
      <img :src="avatar" alt="avatar" class="w-auto h-12 rounded-full" />
    </button>
    <div class="copyright py-5 md:py-0">
      <p class="text-center">
        &copy;{{ new Date().getFullYear() }}
        <span class="author">{{ author }}</span
        >. All Right Reserved.
      </p>
      <p class="text-xs text-center text-gray-400">
        除特殊说明外，本站的文章遵循
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
          target="_blank"
          class="text-blue-400"
          >CC-BY-SA-4.0</a
        >
        协议
      </p>
    </div>

    <div class="btn-container">
      <button
        v-for="item of socialMedia"
        :key="item.name"
        class="relative mx-1"
      >
        <a
          :href="item.url"
          :target="item.name === 'email' ? '' : '_blank'"
          class="absolute top-0 right-0 w-full h-full"
        ></a>
        <img :src="item.logo" :alt="item.name" class="w-auto h-5" />
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      author: '',
      avatar: '',
      socialMedia: []
    }
  },
  created() {
    this.author = this.$site.themeConfig.author;
    this.avatar = this.$site.themeConfig.logo;
    this.socialMedia = this.$site.themeConfig.socialMedia;
  }
};
</script>

<style lang="scss" scoped>
</style>