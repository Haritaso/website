<template>
  <div class="back">
    <svg xmlns="http://www.w3.org/2000/svg" x=0 y=0 width=104 height=104  font-size="40">
      <rect x="0" y="0" width="104" height="104" rx="10" fill="#fff" fill-opacity="0.7" stroke-width="4" />
      <image x="12" y="12" width="80" height="80" rx="10" xlink:href="https://github.com/haritaso.png" />
      <rect x="10" y="10" width="84" height="84" rx="10" fill="none" fill-opacity="0" stroke="black" stroke-width="4"/>
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
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  position: absolute;
  top: 50%;
}
</style>
