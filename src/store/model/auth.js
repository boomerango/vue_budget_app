export default {
  state: {
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    clearToken(state) {
      state.token = null
      localStorage.removeItem('token')
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token
    },
    token(state) {
      return state.token
    }
  }
}
