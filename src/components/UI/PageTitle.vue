<template>
  <h1 class="page-title">
    <slot></slot>
  </h1>
</template>

<script>
  export default {
    name: 'page-title'
  }
</script>

<style scoped>
  .page-title {
    margin-bottom: 15px;
  }
</style>