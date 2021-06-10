<template>
  <div class="buttonContainer">
    <button class="adf" type="submit"><CustomText class="buttonText bold">{{ ButtonText }}</CustomText></button>
  </div>
</template>

<script>
import CustomText from '../CustomText.vue'
export default {
  name: 'twButton',
  props: {
    ButtonText: {
      type: String,
      default: 'Button'
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  components: {
    CustomText
  }
}
</script>
<style lang="postcss" scoped>
.adf {
  border-radius: 999px;
  width: 100px;
  height: 40px;
}

.buttonText{
    
}
</style>
