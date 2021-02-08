<template>
  <div class="min-h-screen w-full flex flex-col">
    <Navbar :title="title" />
    <Content class="main flex-grow" />
    <Footer :author="author" :avatar="avatar" :socialMedia="socialMedia"/>
  </div>
</template>

<script>
import Navbar from "./utils/Navbar.vue";
import Footer from "./utils/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      title: '',
      author: '',
      avatar: '',
      socialMedia: [],

    };
  },
  created() {
    this.title = this.$site.title;
    this.author = this.$site.themeConfig.author;
    this.avatar = this.$site.themeConfig.logo;
    this.socialMedia = this.$site.themeConfig.socialMedia;
    console.log(this.socialMedia);
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