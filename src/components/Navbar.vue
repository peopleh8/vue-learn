<template>
  <div class="navbar">
    <router-link class="logo" to="/">Logo</router-link>
    <nav>
      <router-link to="/about">About</router-link>
      <router-link to="/posts">Posts</router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .navbar {
    height: 50px;
    background: teal;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    text-transform: uppercase;
    font-size: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  nav a {
    margin-left: 10px;
  }
</style>