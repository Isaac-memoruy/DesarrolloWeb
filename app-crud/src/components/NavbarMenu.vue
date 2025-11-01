<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" :to="homeRoute">{{ title }}</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Panel</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/productos">Productos</router-link>
          </li>
        </ul>

        <div class="d-flex">
          <button class="btn btn-outline-danger" @click="logout">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMenu',
  props: {
    title: { type: String, default: 'Panel' },
    homeRoute: { type: String, default: '/dashboard' }
  },
  methods: {
    logout() {
      localStorage.removeItem('logueado')
      // usar path en vez de name si no tienes ruta nombrada 'login'
      this.$router.push('/')
    }
  }
}
</script>