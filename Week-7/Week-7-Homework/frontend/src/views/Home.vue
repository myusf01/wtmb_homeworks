<script>
// @ is an alias to /src
import TweetCard from '@/components/tweet-card.vue'
import {mapState, mapActions} from 'vuex'

export default {
  
  name: 'Home',
  components: {
    TweetCard
  },
  computed: {
    ...mapState(['tweets',"counter"])
  },
  methods: {
    ...mapActions(['fetchTweets','incrementCounter']),

  },
    created(){
    this.fetchTweets()
  }
}
</script>


<template lang="pug">
  main
    h1 Hellolar efenim!
    section
      button.increment-button(@click='incrementCounter') Increment 
      div {{counter}}
    section
      tweet-card(v-for='tweet in tweets', :tweet='tweet')
    
</template>


<style scoped>
section {
  padding: 40px 0;
}
.increment-button {
  color: darkcyan;
  padding: 10px 10px;
  border-radius: 8px;
  background-color: white;
  border: 1px solid darkcyan;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

}

.increment-button:hover{
  background-color: darkcyan;
  color: white;
}
</style>