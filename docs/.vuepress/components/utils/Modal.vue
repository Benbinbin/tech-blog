<template>
  <div class="modal-container">
    <div
      class="modal-bg fixed inset-0 bg-black bg-opacity-50 z-20"
      @click="$emit('closeModal')"
    ></div>
    <div
      class="modal container w-4/5 sm:w-9/12 md:w-3/5 lg:w-3/6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-gray-100 rounded-xl"
    >
      <header
        class="flex items-center p-4 justify-between text-lg font-bold border-b-2 border-gray-200"
      >
        <slot name="header">
          <p>系列</p>
        </slot>
        <button
          @click="$emit('closeModal')"
          class="text-gray-400 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="close"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </header>
      <main class="p-4 md:p-6 lg:p-10" ref="main">
        <slot></slot>
      </main>
      <footer class="flex text-lg font-bold border-t-2 border-gray-200">
        <slot name="footer">
          <!-- <button
            class="up w-full p-2 flex justify-center border-2 border-gray-100 rounded-bl-xl text-gray-400 hover:bg-blue-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
              />
            </svg>
          </button>
          <button
            class="down w-full p-2 flex justify-center border-2 border-gray-100 rounded-br-xl text-center text-gray-400 hover:bg-blue-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
              />
            </svg>
          </button> -->
          <BackTop
            :elem="'main'"
            :direction="'top'"
            class="w-full flex justify-center"
          >
            <template v-slot:content>
              <div
                class="p-2 flex justify-center items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
                  />
                </svg>
              </div>
            </template>
          </BackTop>
          <BackTop
            :elem="'main'"
            :direction="'bottom'"
            class="w-full flex justify-center"
          >
            <template v-slot:content>
              <div
                class="p-2 flex justify-center items-center text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                  />
                </svg>
              </div>
            </template>
          </BackTop>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import BackTop from "./BackTop.vue";

export default {
  components: {
    BackTop,
  },
  data() {
    return {};
  },
  created() {
    document.body.style.overflow = "hidden";
  },
  destroyed() {
    document.body.style.overflow = "overlay";
  },
};
</script>

<style lang="scss" scoped>
.modal {
  main {
    max-height: 60vh;
    overflow: overlay;
  }
}
</style>