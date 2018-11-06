<template>
  <div class="timeline">
    <twitter :width=width :height=height></twitter>
    <mastodon :width=width :height=height></mastodon>
    <github :width=width :height=height></github>
  </div>
</template>

<script>
import anime from 'animejs'
import twitter from '../assets/twitter'
import mastodon from '../assets/mastodon'
import github from '../assets/github'

export default {
  name: 'icons',
  data () {
    return {
      width: "64",
      height: "64"
    }
  },
  components: {
    twitter,
    mastodon,
    github
  },
  mounted () {
    const timeline = anime.timeline()
    timeline
      .add({
        targets: '.timeline #path',
        translateY: 180,
        rotate: 720,
        easing: 'easeOutCirc'
      })
      .add({
        targets: '.timeline #path2',
        translateY: 180,
        rotate: 720,
        offset: '-=600',
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.timeline #path3',
        translateY: 180,
        rotate: 720,
        easing: 'easeOutBack'
      })
  }
}
</script>

<style scoped>
.timeline {
  display: flex;
  z-index: 3;
  justify-content: space-around;
  width: 250px;
  position: relative;
  top: -235px;
}
</style>
