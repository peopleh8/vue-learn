<template>
  <div class="dialog" v-if="show" v-on:click="hideDialog">
    <div class="dialog__content" v-on:click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-dialog',
    props: {
      show: {
        type: Boolean,
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped>
  .dialog {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog__content {
    background: #fff;
    border-radius: 12px;
    min-height: 50px;
    min-width: 500px;
    padding: 20px;
  }
</style>