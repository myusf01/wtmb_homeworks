<template>
  <div id="page" :class="PageName">
    <PageTitleVue :HeaderTitle="ContentName" />

    <div class="content">
      <TweetComposer/>
      <slot />
    </div>
  </div>
</template>

<script>
import PageTitleVue from './PageTitle.vue'
import TweetComposer from './TweetComposer.vue'
export default {
  name: 'Page',
  props: {
    PageName: {
      type: String,
      default: 'PageVue'
    },
    ContentName: {
      type: String
    }
  },
  components: {
    TweetComposer,

    PageTitleVue
  }
}
</script>
<style lang="postcss" scoped>
#page {
  align-items: flex-start;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (--t) {
    min-width: 550px;
    max-width: 600px;

    border-right: 1px solid var(--c-border-color);
  }
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
