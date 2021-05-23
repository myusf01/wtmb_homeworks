<template>
  <div class="PageHead">
    <div class="PageTitle">
      <div class="title-text">
        <CustomText class="bold large">{{ HeaderTitle }}</CustomText>
      </div>

      <span class="icon"><IconStar /></span>
    </div>
  </div>
</template>

<script>
import CustomText from '../CustomText.vue'
import IconStar from '@/icons/common/star.svg'
export default {
  name: 'PageHead',
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

.PageHead {
  z-index: 100;
  width: 100%;
  display: flex;
  position: fixed;
  @media (--t) {
    width: 599px;
    min-width: 550px;
  }
}
.PageTitle {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  height: 55px;
  border-bottom: 1px solid #2f3336;
  background-color: #fff;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  @media (--t) {
    margin-right: 0;
  }
}
</style>
