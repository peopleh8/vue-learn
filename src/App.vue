<template>
  <div class="app">
    <h1 class="page-title">Posts page</h1>
    <div class="page-controls">
      <my-select v-model="selectedSort" v-bind:options="sortOptions" />
      <my-button v-on:click="openDialog">Create post</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-from 
        v-on:create="createPost"
      />
    </my-dialog>
    <post-list 
      v-bind:posts="sortPosts"
      v-on:remove="removePost"
      v-if="!isPostsLoading"
    />
    <err-title v-else>Loading...</err-title>
  </div>
</template>

<script>
import axios from 'axios'
import PostFrom from '@/components/PostForm'
import PostList from '@/components/PostList'

export default {
  components: {
    PostFrom, PostList,
  },
  data() {
    return {
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'By name' },
        { value: 'body', name: 'By body' },
      ],
      posts: [],
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    openDialog() {
      this.dialogVisible = true
    },
    async fetchUsers() {
      this.isPostsLoading = true
      
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

        this.posts = data
      } catch (e) {
        console.error(e.message)
      } finally {
        this.isPostsLoading = false
      }
    },
  },
  mounted() {
    this.fetchUsers()
  },
  computed: {
    sortPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    }
  },
}
</script>

<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  .page-title {
    margin-bottom: 15px;
  }

  .page-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>