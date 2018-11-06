<template>
  <div id="frame">
    <svg class="black" width="270" height="120" viewBox="-10, -10, 270, 120">
      <defs>
        <filter id="fil" filterUnits="userSpaceOnUse" cx="0" cy="0" r="4">
          <feGaussianBlur stdDeviation="1"/>
        </filter>
      </defs>
      <circle filter="url(#fil)" fill="rgba(40, 172, 224, 0.75)" cx="0" cy="0" r="4"></circle>
      <rect width="250" height="100" stroke="rgb(40, 172, 224)" rx="10" stroke-width="2" fill="none" />
    </svg>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: 'blackBox',
  data () {
    return {
      move: false,
      title: false
    }
  },
  created () {
    setTimeout(() => {
      this.$nextTick(() => {
        this.title = true
      })
    }, 5000)
  },
  mounted () {
    const path = anime.path('#frame rect')
    anime({
      targets: '#frame circle',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 15000,
      loop: true
    })
  },
}
</script>

<style scoped>
#frame {
  position: relative;
  top: -10px;
}
.black {
  z-index: 2;
  background-color: black;
  position: relative;
  bottom: -55px;
}
</style>
