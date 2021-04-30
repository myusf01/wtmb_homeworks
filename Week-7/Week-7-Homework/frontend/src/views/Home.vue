<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1">Hele Hele Dünya</CustomText>
    <CustomText tag="p">Hele Hele Dünya</CustomText>
    <CustomText tag="p" size="small">Hele Hele Dünya</CustomText>
    <CustomText tag="b" size="large">Hele Hele Dünya</CustomText>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<style>
.a1 {
  color: var(--c-theme);
}
</style>
