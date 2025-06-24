<template>
  <div class="container mt-4">
    <h2>Register</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" id="username" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { BACKEND_URL } from '../config'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async submit() {
      await fetch(`${BACKEND_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      })
      this.$router.push('/login')
    }
  }
}
</script>
