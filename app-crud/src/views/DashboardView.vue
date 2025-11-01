<template>
  <div>
    <NavbarMenu :title="Dashboard" />
    <router-view />
  </div>
</template>

<script>
import NavbarMenu from '@/components/NavbarMenu.vue';

export default {
  name: 'DashboardView',
  components: { NavbarMenu },
  methods: {
    logout() {
      localStorage.removeItem('logueado')
      this.$router.push('/')
    }
  }
}
</script>
