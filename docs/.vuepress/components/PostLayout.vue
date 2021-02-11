<template>
  <div class="min-h-screen flex flex-col">
    <div class="relative flex-grow">
      <Layout />
      <div
        class="catalog-container absolute top-0 right-4 h-full hidden lg:block"
        :style="{width: `${catalogWidth}px`}"
      >
        <Catalog :headings="headings" class="sticky top-40"  />
      </div>
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
    };
  },
  created() {
    console.log(this.$page);
  },
  mounted() {
    const content = document.getElementsByClassName("theme-default-content")[0];
    const list = content.querySelectorAll("h2, h3, h4, h5, h6");
    list.forEach((item) => {
      this.headings.push({
        level: headingsMap[item.nodeName],
        id: item.id,
        text: item.innerHTML,
      });
    });
    console.log(this.headings);
    this.catalogWidth =
      (document.documentElement.clientWidth - content.offsetWidth) / 2;
    console.log(this.catalogWidth);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// .catalog {
//   max-width: 10rem;
// }
</style>