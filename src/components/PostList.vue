<template>
  <div class="post-list" v-if="posts && posts.length > 0">
    <h3>Post List</h3>
    <transition-group name="post-list">
      <post-item 
        v-for="post in posts" 
        v-bind:post="post"
        v-bind:key="post.id"
        v-on:remove="$emit('remove', post)"
      />
    </transition-group>
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

  .post-list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .post-list-enter-active,
  .post-list-leave-active {
    transition: all .4s ease;
  }
  .post-list-enter-from,
  .post-list-leave-to {
    opacity: 0;
  }

  .post-list-move {
    transition: transform .4s ease;
  }
</style>