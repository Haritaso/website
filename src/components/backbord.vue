<template>
  <div class="back">
    <svg xmlns="http://www.w3.org/2000/svg" x=0 y=0 width=400 height=180  font-size="40">
      <rect x="0" y="0" width="400" height="180" rx="10" fill="#fff" fill-opacity="0.7" stroke-width="4" />
      <image x="40" y="40" width="100" height="100" rx="10" xlink:href="https://github.com/haritaso.png" />
      <rect x="38" y="38" width="104" height="104" rx="10" fill="none" fill-opacity="0" stroke="black" stroke-width="4"/>
      <a href="https://haritaso.me">
        <text x="180" y="100">Haritaso</text>
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
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>
