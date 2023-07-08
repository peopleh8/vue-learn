<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style scoped>
  .btn {
    align-self: flex-end;
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    color: teal;
    cursor: pointer;
    font-size: 20px;
  }
</style>