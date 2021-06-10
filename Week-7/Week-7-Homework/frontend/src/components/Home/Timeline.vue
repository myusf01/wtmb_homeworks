<template>
  <MainPage PageName="timeline" ContentName="Hele Hele Dünya">
    <Tweet v-for="tweet in tweets" :key="tweet.text" :tweet="tweet"> </Tweet>
  </MainPage>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MainPage from '../Main/MainPage.vue'
import Tweet from '../Main/Tweet.vue'

export default {
  name: 'timeline',
  components: {
    Tweet,
    MainPage
  },
  computed: {
    ...mapState(['tweets'])
  },
  methods: {
    ...mapActions(['fetchTweets'])
  },
  created() {
    this.fetchTweets()
  }
}
</script>

<style lang="postcss" scoped>
CustomText {
  display: inline-block;
}
</style>
