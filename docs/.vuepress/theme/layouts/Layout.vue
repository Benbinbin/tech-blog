<template>
  <div class="min-h-screen w-full flex flex-col">
    <Navbar :title="title" />
    <Content class="main flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      title: "",
      author: "",
      avatar: "",
      socialMedia: [],
    };
  },
  created() {
    this.title = this.$site.title;
    console.log(this.$page);
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