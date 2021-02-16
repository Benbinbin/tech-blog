<template>
  <div class="headings-tooltip-container">
    <ul
      class="m-2 pt-8 relative flex justify-between overflow-x-auto"
      ref="headingList"
    >
      <li
        v-for="heading of headings"
        :key="heading.id"
        :ref="heading.id"
        class="w-full flex flex-col items-center relative"
      >
        <span
          class="absolute inset-x-0 -top-7 text-xs text-center"
          :class="`text-${levelColor(heading.level)}`"
          >{{ `H${heading.level}` }}</span
        >
        <div
          class="dot-icon absolute inset-x-0 mx-auto ring-4 ring-opacity-30 rounded-full"
          :class="`bg-${levelColor(heading.level)} ring-${levelColor(
            heading.level
          )}`"
          :style="dotStyle(heading.level)"
        ></div>
        <div
          class="w-full py-4 border-t border-dashed border-gray-300 flex justify-center items-center"
        >
          <a
            :href="`#${heading.id}`"
            class="text-sm font-light tracking-widest"
            :class="{ 'font-black': heading.id === selectedHeading }"
            style="writing-mode: vertical-rl"
            >{{ heading.text }}</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const levelSizemap = {
  2: 0.75,
  3: 0.5,
  4: 0.4,
  5: 0.3,
  6: 0.2,
};

const levelColorMap = {
  2: "red-400",
  3: "indigo-400",
  4: "gray-500",
  5: "gray-400",
  6: "gray-400",
};
export default {
  props: ["headings", "selectedHeading"],
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
        top: `${-levelSizemap[level] / 2}rem`,
      };
    },
  },
  watch: {
    selectedHeading() {
      const width = this.$refs.headingList.clientWidth;

      const left = this.$refs[this.selectedHeading][0].offsetLeft;
    //   console.log(this.$refs[this.selectedHeading]);
      const scrollDis = left - width / 2;
    //   console.log(width, left, scrollDis);
      if (scrollDis > 0) {
        this.$refs.headingList.scrollLeft = scrollDis;
      } else {
        this.$refs.headingList.scrollLeft = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.headings-tooltip-container {
  li {
    min-width: 2rem;
  }
}
</style>