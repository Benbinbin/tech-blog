<template>
  <nav class="w-full py-4 px-6 border-b-2 border-gray-200">
    <ul class="flex justify-between">
      <li>
        <a href="/" class="font-bold text-xl">{{ title }}</a>
      </li>
      <li>
        <ul class="flex space-x-4">
          <li v-for="item of navList">
            <a :href="item.link" class="">{{ item.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      navList: [],
    };
  },
  created() {
    this.title = this.$site.title;
    // console.log(this.$site);
    this.navList = this.$site.themeConfig.nav
    console.log(this.navList);
  },
};
</script>

<style>
</style>