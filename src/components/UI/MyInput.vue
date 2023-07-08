<template>
  <input class="inp" type="text" v-bind:value="modelValue" v-on:input="updatedInput">
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: {
        type: [String, Number]
      }
    },
    methods: {
      updatedInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<style scoped>
  .inp {
    width: 100%;
    display: block;
    padding: 10px 15px;
    border: 1px solid teal;
    margin-bottom: 10px;
  }
</style>