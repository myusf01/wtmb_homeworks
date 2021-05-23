<template>
  <div class="home">
    <home-timeline-vue/>
    <Widgets/>
  </div>
</template>

<script>
import homeTimelineVue from '@/components/Home/Timeline.vue'
import Widgets from '@/components/Main/Widgets.vue'
export default {
  name: 'Home',
  components: {
    homeTimelineVue,
    Widgets

    
  }
}
</script>

<style>
.a1 {
  color: var(--c-theme);
}
.home {
  /* margin-left: auto; */
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 350px;
    grid-gap: 30px;
  }
}


</style>
