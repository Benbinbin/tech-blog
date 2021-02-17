<template>
  <div class="min-h-screen w-full flex flex-col bg-gray-100">
    <div
      class="carousel bg-gray-500 py-32 flex flex-col justify-center items-center"
    >
      <Content
        slot-key="title"
        class="text-center text-6xl md:text-8xl font-extrabold text-white"
      />
      <div
        class="dividing-line flex items-center w-full max-w-screen-lg px-10 md:px-20 m-10"
      >
        <div class="before w-full" style="border: 0.05rem solid #dfe6e9"></div>
        <img :src="$withBase('/img/tech-blog.svg')" alt="logo" class="mx-5 md:mx-10 w-16" />
        <div class="after w-full" style="border: 0.05rem solid #dfe6e9"></div>
      </div>
      <Content
        slot-key="description"
        class="text-gray-300 text-lg font-light px-8"
      />
    </div>

    <Content class="main flex-grow" />

    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-6 md:px-10 my-10 "
    >
      <div
        v-for="card of cards"
        :key="card.name"
        class="card rounded-2xl px-6 py-4 relative bg-cover bg-center bg-no-repeat hover:shadow-md transition-all duration-300 ease-in-out"
        :style="{ backgroundImage: 'url('+ $withBase(card.bg) +')' }"
      >
        <a
          :href="$withBase(`/posts-list/${card.name.toLowerCase()}.html`)"
          class="absolute inset-0 z-20"
        ></a>
        <div class="card-body my-32 relative z-10">
          <h3 class="text-white text-5xl font-extrabold">{{ card.name }}</h3>
        </div>
        <div class="card-footer space-x-4 relative z-10">
          <span class="tag text-white font-semibold" v-for="tag in card.tags"
            >#{{ tag }}</span
          >
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./utils/Footer.vue";

export default {
  components: {
    Footer,
  },
  data() {
    return {
      cards: null,
    };
  },
  created() {
    this.cards = this.$page.frontmatter.cards;
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card {
  &:hover {
    transform: scale(1.01);
  }

  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.4);
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 1rem;
  }
}
</style>