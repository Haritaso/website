<template>
  <div>
    <div v-if="title == true" class="title">
      <transition appear>
        <a class="link" href="https://haritaso.me">haritaso.me</a>
      </transition>
    </div>
    <div v-else class="dummybox"></div>
  </div>
</template>

<script>
export default {
  name: 'mainTitle',
  data () {
    return {
      title: false
    }
  },
  created () {
    setTimeout(() => {
      this.$nextTick(() => {
        this.title = true
      })
    },2500)
  }
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.link {
  color: rgb(40, 172, 224);
  text-decoration: none;
}
.title {
  font-size: 2rem;
  text-align: center;
  position: relative;
  height: 2rem;
  top: 1rem;
}
.dummybox {
  height: 2rem;
}
</style>
