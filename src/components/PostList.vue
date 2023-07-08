<template>
  <div class="post-list" v-if="posts && posts.length > 0">
    <h3>Post List</h3>
    <post-item 
      v-for="post in posts" 
      v-bind:post="post"
      v-bind:key="post.id"
      v-on:remove="$emit('remove', post)"
    />
  </div>
  <err-title v-else>Posts list is empty</err-title> 
</template>

<script>
  import PostItem from './PostItem'

  export default {
    components: {
      PostItem
    },
    props: {
      posts: {
        type: Array,
        required: true,
      },
    }
  }
</script>

<style scoped>
  .post-list {
    margin-top: 15px;
  }
</style>