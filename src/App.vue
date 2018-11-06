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
}
</style>
