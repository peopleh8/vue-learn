<template>
  <h3>Post creation</h3>
  <form class="form" v-on:submit="createPost">
    <my-input 
      type="text" 
      placeholder="Title of post" 
      v-model="post.title"
    />
    <my-input 
      type="text" 
      placeholder="Description of post" 
      v-model="post.body"
    />
    <my-button>Submit</my-button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: '',
        }
      }
    },
    methods: {
      createPost(e) {
        e.preventDefault()

        if (!this.post.title.trim() || !this.post.body.trim()) return

        this.post.id = Date.now()
        this.$emit('create', this.post)

        this.post = {
          title: '',
          body: '',
        }
      }
    },
  }
</script>

<style scoped>
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }
</style>