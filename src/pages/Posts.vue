<template>
  <div>
    <page-title>Posts page</page-title>
    <my-input v-model="searchQuery" type="text" placeholder="Search..."  />
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
      v-bind:posts="sortedAndSearchedPosts"
      v-on:remove="removePost"
      v-if="!isPostsLoading"
    />
    <err-title v-else />
    <div ref="observer" class="observer"></div>
    <!-- <post-pagination 
      v-bind:pages="totalPages" 
      v-bind:page="page"
      v-on:paginate="changePage"
    /> -->
  </div>
</template>

<script>
import axios from 'axios'
import PostFrom from '@/components/PostForm'
import PostList from '@/components/PostList'
// import PostPagination from '@/components/PostPagination'

export default {
  components: {
    PostFrom, PostList,
  },
  data() {
    return {
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 1,
      sortOptions: [
        { value: 'id', name: 'By id' },
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
    async fetchPosts() {
      this.isPostsLoading = true
      
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })

        this.totalPages = Math.ceil(parseInt(response.headers['x-total-count']) / this.limit)

        this.posts = response.data
      } catch (e) {
        console.error(e.message)
      } finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      this.page += 1

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })

        this.totalPages = Math.ceil(parseInt(response.headers['x-total-count']) / this.limit)

        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        console.error(e.message)
      }
    },
    // changePage(pageNum) {
    //   this.page = pageNum
    // }
  },
  mounted() {
    this.fetchPosts()

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    }

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts()
      }
    }

    const observer = new IntersectionObserver(callback, options)

    observer.observe(this.$refs.observer)
  },
  // watch: {
  //   page() {
  //     this.fetchPosts()
  //   }
  // },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        if (typeof post1[this.selectedSort] === 'string' && typeof post1[this.selectedSort] === 'string') {
          return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
        }

        if (typeof post1[this.selectedSort] === 'number' && typeof post1[this.selectedSort] === 'number') {
          return post1[this.selectedSort] - post2[this.selectedSort]
        }
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title?.toLowerCase().includes(this.searchQuery?.toLowerCase()))
    }
  },
}
</script>

<style>
  .page-controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .observer {
    width: 100%;
    height: 10px;
    background: red;
  }
</style>