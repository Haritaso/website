<template>
  <div id="app">
    <backbord />
    <particlesJS />
  </div>
</template>

<script>
import particlesJS from './components/ParticlesJS'
import backbord from './components/backbord'
export default {
  name: 'app',
  components: {
    particlesJS,
    backbord
  }
}
</script>

<style>
#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
