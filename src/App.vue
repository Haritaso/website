<template>
  <div id="app">
    <maintitle />
    <box />
    <icons />
  </div>
</template>

<script>
import maintitle from './components//mainTitle'
import box from './components/blackBox'
import icons from './components/iconGroup'

export default {
  name: 'app',
  components: {
    maintitle,
    box,
    icons
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
