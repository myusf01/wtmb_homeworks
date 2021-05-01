<template>
  <div class="home">
    <CustomText class="a1">Hele Hele Dünya</CustomText>
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
