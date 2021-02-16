<template>
  <div class="headings-slider-container w-full">
    <vue-slider
      v-model="currentHeading"
      :contained="true"
      :height="6"
      :adsorb="true"
      :data="headings"
      :data-value="'id'"
      :data-label="'level'"
      @change="changeHandler"
    >
    </vue-slider>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

const levelSizemap = {
  2: 0.75,
  3: 0.5,
  4: 0.4,
  5: 0.3,
  6: 0.2,
};

const levelColorMap = {
  2: "red-300",
  3: "indigo-300",
  4: "gray-300",
  5: "gray-300",
  6: "gray-200",
};

export default {
  components: {
    VueSlider,
  },
  props: ["headings", "activeHeading"],
  data() {
    return {
      headingsArr: this.headings,
      currentHeading: {},
    };
  },
  methods: {
    marks(val) {
      console.log(val);
      return (val) => val.level;
    },
    tooltip(val) {
      console.log(val);
      return (val) => `H${val.level}: ${val.text}`;
    },
    changeHandler(value) {
      console.log(value);
    }
    // levelColor(level) {
    //   return levelColorMap[level];
    // },
    // levelSize(level) {
    //   return levelSizemap[level];
    // },
    // dotStyle(level) {
    //   return {
    //     width: `${levelSizemap[level]}rem`,
    //     height: `${levelSizemap[level]}rem`,
    //     left: `${-levelSizemap[level] / 2}rem`,
    //   };
    // },
  },
  created() {
    console.log(this.headings);
  },
};
</script>

<style lang="scss" scoped>
.heading-list-container {
  // ul {
  //   max-height: 80vh;
  //   overflow: overlay;
  //   // border-left: 1px solid gray;
  //   &:hover {
  //     li > span,
  //     .dot-icon {
  //       opacity: 1;
  //     }
  //   }
  // }
}
</style>