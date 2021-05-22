<template>
  <div class="PageHeader">
    <div class="page-title">
      <CustomText class="bold large">{{ HeaderTitle }}</CustomText>
    </div>

    <span class="icon"><IconStar/></span>
  </div>
</template>

<script>
import CustomText from '../CustomText.vue'
import IconStar from '@/icons/common/star.svg'
export default {
  name: 'PageHeader',
  props: {
    HeaderTitle: {
      type: String
    }
  },
  components: {
    CustomText,
    IconStar
  }
}
</script>
<style lang="postcss" scoped>
.PageHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 55px;
  width: 100%;
  
  border-bottom: 1px solid #2f3336;
  @media (--t) {
    max-width: 600px;
  }
}

.page-title {

}
</style>
