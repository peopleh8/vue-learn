<template>
  <div>
    <page-title>The detail page of post with id - {{ $route.params.id }}</page-title>
    <div class="post__info" v-if="!isPostLoading">
      <div>Title: <strong>{{ post.title }}</strong></div>
      <div>Body: <strong>{{ post.body }}</strong></div>
    </div>
    <err-title v-else />
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        post: {},
        isPostLoading: false
      }
    },
    methods: {
      async fetchPost() {
        this.isPostLoading = true
        
        try {
          const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)

          this.post = data
        } catch (e) {
          console.error(e.message)
        } finally {
          this.isPostLoading = false
        }
      }
    },
    mounted() {
      this.fetchPost()
    }
  }
</script>

<style scoped>

</style>