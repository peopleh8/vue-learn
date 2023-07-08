<template>
  <select v-on:change="chgangeOption">
    <option value="" disabled selected>Choose from list</option>
    <option 
      v-for="option in options"
      v-bind:key="option.value"
      v-bind:value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String,
      },
      options: {
        type: Array, 
        default: () => [],
      }
    },
    methods: {
      chgangeOption(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style scoped>

</style>