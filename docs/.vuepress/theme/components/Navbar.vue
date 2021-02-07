<template>
  <nav class="w-full p-6 border-b-2 border-gray-200">
    {{title}}
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.$site.title
  }
};
</script>

<style>
</style>