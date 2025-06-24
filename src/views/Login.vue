<template>
  <div class="container mt-4">
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" id="username" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      })
      const data = await res.json()
      if (data.token) {
        this.$store.commit('setToken', data.token)
        this.$router.push('/')
      }
    }
  }
}
</script>
