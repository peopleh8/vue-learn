<template>
  <div class="post">
    <div class="post__content">
      <div><strong>Title: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button v-on:click="$emit('remove', post)">Delete</my-button>
    </div>
  </div> 
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style scoped>
  .post {
    padding: 15px;
    border: 1px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post__content {
    flex: 1;
  }

  .post__btns {
    margin-left: 10px;
  }
</style>