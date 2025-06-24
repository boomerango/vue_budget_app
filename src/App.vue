<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!isAuth" to="/login">Login</router-link> |
      <router-link v-if="!isAuth" to="/register">Register</router-link>
      <span v-if="isAuth">
        <a href="#" @click.prevent="logout">Logout</a>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters['isAuthenticated']
    }
  },
  methods: {
    logout() {
      this.$store.commit('clearToken')
      this.$router.push('/login')
    }
  }
}
</script>
