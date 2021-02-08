<template>
   <Layout>
    <template slot="page-bottom">
      <Footer/>
    </template>
  </Layout>
</template>

<script>
import Footer from "./utils/Footer.vue";
import Layout from "@theme/layouts/Layout.vue";

export default {
  components: {
    Layout,
    Footer,
  },
  data() {
    return {
    };
  },
  created() {
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