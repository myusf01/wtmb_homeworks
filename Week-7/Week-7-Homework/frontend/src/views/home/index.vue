<template>
  <div class="home">
    <home-timeline-vue/>
    <div class="widgets">
      <CustomText class="a1"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque
        adipisci doloribus culpa quasi vero perspiciatis a est dolorem
        temporibus rem omnis repellat neque optio aut, architecto esse iure
        minus.</CustomText
      >
    </div>
  </div>
</template>

<script>
import CustomText from '@/components/CustomText'
import homeTimelineVue from '@/components/Home/Timeline.vue'
export default {
  name: 'Home',
  components: {
    homeTimelineVue,

    CustomText
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

.widgets {
  display: none;
  @media (--t) {
    display: flex;
  }
}
CustomText {
  display: inline-block;
}
</style>
