<template>
  <div id="app">
    <backbord />
    <particlesJS />
  </div>
</template>

<script>
import particlesJS from './components/ParticlesJS'
import backbord from './components/backbord'
import anime from 'animejs'

export default {
  name: 'app',
  mounted() {
    const basicTimeline = anime.timeline()
    basicTimeline
      .add({
        targets: '#app .back',
        translateY: 550,
        duration: 1000,
        elasticity: 400,
      })
  },
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
