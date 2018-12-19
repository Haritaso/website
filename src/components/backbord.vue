<template>
  <div class="back">
    <svg xmlns="http://www.w3.org/2000/svg" x=0 y=0 width=280 height=140  font-size="40">
      <rect x="0" y="0" width="280" height="140" rx="10" fill="#fff" fill-opacity="0.7" stroke-width="4" />
      <image x="20" y="30" width="80" height="80" rx="10" xlink:href="https://github.com/haritaso.png" />
      <rect x="18" y="28" width="84" height="84" rx="10" fill="none" fill-opacity="0" stroke="black" stroke-width="4"/>
      <a href="https://haritaso.me">
        <text x="120" y="80">Haritaso</text>
      </a>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'backbord'
}
</script>

<style>
.back {
  z-index: 1;
  position: absolute;
  top: -350px;
}
</style>
