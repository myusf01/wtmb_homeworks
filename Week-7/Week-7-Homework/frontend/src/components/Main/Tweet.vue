<template>
  <div class="tweet">
    <article>
      <div class="photo">
        <ProfilePhoto :size="48" />
      </div>
      <div class="tweetContainer">
        <div class="tweetHeader">
          <div class="authorInfo">
            <CustomText class="name bold">Muhammed Yusuf</CustomText>
            <CustomText class="slug">@myusf_0</CustomText>
            <CustomText>.</CustomText>
            <CustomText class="time">35m</CustomText>
          </div>
          <IconMoreOpt class="more-icon" />
        </div>
        <slot />
        <div class="tweetContent"></div>
      </div>
    </article>
  </div>
</template>

<script>
import CustomText from '../CustomText.vue'
import ProfilePhoto from '../ProfilePhoto.vue'
import IconMoreOpt from '@/icons/common/more-opt.svg'

export default {
  name: 'MainTweet',
  components: {
    IconMoreOpt,
    CustomText,

    ProfilePhoto
  }
}
</script>
<style lang="postcss" scoped>
article {
  display: flex;
  flex-direction: row;
  padding: 0 16px;
}
span ~ span {
  margin-left: 4px;
}

.tweet {
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  width: 100%;
  max-width: 599px;
  height: auto;
  border-bottom: 1px solid var(--c-border-color);
}
.photo {
  margin-right: 12px;
}
.tweetHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.authorInfo {
  display: flex;
}
.more-icon {
  width: 18px;
  height: 18px;
}
</style>
