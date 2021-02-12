<template>
  <div class="scroll-to-top">
    <button @click="scrollTo">
      <slot name="content">
        <div
          class="p-2 flex justify-center items-center rounded-l-md bg-gray-300 text-white hover:bg-gray-600 transition-all duration-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
            />
          </svg>
          <p class="pl-2 hidden text-xs">返回顶部</p>
        </div>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    elem: {
      type: String,
      default: "",
    },
    direction: {
      type: String,
      default: "top",
    },
  },
  methods: {
    scrollTo() {
      let target = null;
      if (!this.elem) {
        target = document.documentElement;
      } else {
        target = this.$parent.$refs[this.elem];
      }
      if (this.direction === "top") {
        target.scrollTop = 0;
      } else if (this.direction === "bottom") {
        target.scrollTop = target.scrollHeight;
      }
    },
  },
};
</script>

<style lang="scss">
button {
  &:focus {
    outline: none;
  }
  &:hover {
    p {
      display: block;
    }
  }
}
</style>