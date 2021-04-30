<template>
  <div class="home">
    <h1>Home</h1>
    <CustomText class="a1">Hele Hele Dünya</CustomText>
    <CustomText tag="p">Hele Hele Dünya</CustomText>
    <CustomText tag="p" size="small">Hele Hele Dünya</CustomText>
    <CustomText tag="b" size="large">Hele Hele Dünya</CustomText>
    <IconHome fill="black"/>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import IconHome from '@/icons/menu/home.svg'

export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style>
.a1 {
  color: var(--c-theme);
}
</style>
