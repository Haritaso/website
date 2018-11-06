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
    },5000)
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
  font-size: 32px;
  text-align: center;
  position: relative;
  bottom: -20px;
}
.dummybox {
  height: 38px;
}
</style>
