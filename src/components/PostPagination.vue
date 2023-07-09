<template>
  <div class="pagination">
    <div 
      class="page"
      v-for="pageNum in pages" 
      v-bind:key="pageNum"
      v-bind:class="{
        'current': page === pageNum
      }"
      v-on:click="$emit('paginate', pageNum)"
    >
      {{ pageNum }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pages: {
        type: Number
      },
      page: {
        type: Number
      }
    },
  }
</script>

<style scoped>
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .page {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid teal;
    opacity: .5;
    cursor: pointer;
  }

  .page + .page {
    margin-left: 5px;
  }

  .page.current {
    opacity: 1; 
  }
</style>