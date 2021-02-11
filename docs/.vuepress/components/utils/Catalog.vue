<template>
  <div class="heading-list-container">
    <ul class="p-8 opacity-60 hover:opacity-100 transition-all duration-300">
      <li
        v-for="heading of headings"
        :key="heading.id"
        class="flex justify-start items-center relative"
      >
        <span
          class="opacity-0 absolute t-0 -left-8 text-xs transition-all duration-300"
          :class="`text-${levelColor(heading.level)}`"
          >{{ `H${heading.level}` }}</span
        >
        <div
          class="dot-icon absolute t-0 ring-2 opacity-0 ring-opacity-50 rounded-full transition-all duration-300"
          :class="`bg-${levelColor(heading.level)} ring-${levelColor(heading.level)}`"
          :style="dotStyle(heading.level)"
        ></div>
        <a
          :href="`#${heading.id}`"
          class="px-4 py-2 border-l border-dashed border-gray-300 text-xs"
          >{{ heading.text }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
const levelSizemap = {
  2: 1,
  3: 0.75,
  4: 0.6,
  5: 0.4,
  6: 0.2,
};

const levelColorMap = {
  2: "gray-900",
  3: "gray-700",
  4: "gray-500",
  5: "gray-300",
  6: "gray-200",
};
export default {
  props: ["headings"],
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
            left: `${-levelSizemap[level]/2}rem`
        }
    }
  },
};
</script>

<style lang="scss" scoped>
.heading-list-container {
  ul {
    max-height: 80vh;
    overflow: overlay;
    // border-left: 1px solid gray;
    &:hover {
      li > span, .dot-icon {
        opacity: 1;
      }
    }
  }
}
</style>