<template>
  <div class="heading-list-container">
    <ul
      class="m-1 p-7 opacity-60 hover:opacity-100 transition-all duration-300"
    >
      <li
        v-for="heading of headings"
        :key="heading.id"
        class="flex justify-start items-center relative"
      >
        <span
          class="opacity-0 absolute t-0 -left-7 text-xs transition-all duration-300"
          :class="`text-${levelColor(heading.level)}`"
          >{{ `H${heading.level}` }}</span
        >
        <div
          class="dot-icon absolute t-0 ring-4 opacity-0 ring-opacity-30 rounded-full transition-all duration-300"
          :class="`bg-${levelColor(heading.level)} ring-${levelColor(
            heading.level
          )}`"
          :style="dotStyle(heading.level)"
        ></div>
        <a
          :href="`#${heading.id}`"
          class="px-3 py-2 border-l border-dashed border-gray-300 text-sm font-light"
          :class="{ 'font-black': heading.text === activeHeading }"
          >{{ heading.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
const levelSizemap = {
  2: 0.6,
  3: 0.5,
  4: 0.5,
  5: 0.4,
  6: 0.3,
};

const levelColorMap = {
  2: "red-300",
  3: "indigo-300",
  4: "gray-300",
  5: "gray-300",
  6: "gray-200",
};
export default {
  props: ["headings", "activeHeading"],
  data() {
    return {
      scrollTimer: null,
    };
  },
  methods: {
    levelColor(level) {
      return levelColorMap[level];
    },
    levelSize(level) {
      return levelSizemap[level];
    },
    dotStyle(level) {
      return {
        width: `${levelSizemap[level]}rem`,
        height: `${levelSizemap[level]}rem`,
        left: `${-levelSizemap[level] / 2}rem`,
      };
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.heading-list-container {
  ul {
    max-height: 80vh;
    overflow: overlay;
    // border-left: 1px solid gray;
    &:hover {
      li > span,
      .dot-icon {
        opacity: 1;
      }
    }
  }
}
</style>