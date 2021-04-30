<template>
  <div class="Profile">
    <CustomText tag="h1">Hele Hele Profile</CustomText>

    <nav id="nav">
      <router-link to="/profile">Tweets</router-link> |
      <router-link to="/profile/with-replies">Tweets With Replies</router-link>
      | <router-link to="/profile/media">Media</router-link> |
      <router-link to="/profile/likes">Likes</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Profile',
  components: {
    CustomText
  }
}
</script>

<style></style>
