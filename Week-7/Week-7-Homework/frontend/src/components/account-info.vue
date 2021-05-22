<template>
  <div class="account">
    <div class="pic"><ProfilePic :size="40" /></div>

    <div class="user-info">
      <CustomText id="name" class="bold">Muhammed Yusuf</CustomText>
      <CustomText id="slug">@myusf_0</CustomText>
    </div>
    <div class="options-icon"><IconMoreOpt /></div>
  </div>
</template>

<script>
import CustomText from './CustomText.vue'
import ProfilePic from './profile-pic.vue'
import IconMoreOpt from '@/icons/common/more-opt.svg'
export default {
  name: 'account_info',
  components: {
    ProfilePic,
    CustomText,
    IconMoreOpt
  }
}
</script>
<style lang="postcss" scoped>
.options-icon{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-left: auto;
  width: 19px;
  height: 19px;
}
.account {
  position: absolute;
  bottom: 0;
  padding: 0 12px;
  width: 251px;
  max-width: 275px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
}
.pic {
  padding: 12px;
}
.user-info {
  display: flex;
  flex-direction: column;
  text-align: left;

}
span {
  display: inline-block;
}
svg {
  margin-left: auto;
}
</style>
