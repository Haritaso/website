<template>
  <div class="back">
    <svg xmlns="http://www.w3.org/2000/svg" x=0 y=0 width=184 height=184  font-size="40">
      <rect x="0" y="0" width="184" height="184" rx="20" fill="#fff" fill-opacity="0.7" stroke-width="4" />
      <image x="12" y="12" width="160" height="160" rx="10" xlink:href="../assets/icon2.jpg" />
      <rect x="10" y="10" width="164" height="164" rx="10" fill="none" fill-opacity="0" stroke="black" stroke-width="4"/>
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
