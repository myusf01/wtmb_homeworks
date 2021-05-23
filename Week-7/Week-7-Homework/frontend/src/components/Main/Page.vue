<template>
  <div id="page" :class="PageName">
    <PageTitleVue :HeaderTitle="ContentName" />

    <slot />
  </div>
</template>

<script>
import PageTitleVue from './PageTitle.vue'

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
    PageTitleVue
  }
}
</script>
<style lang="postcss" scoped>
#page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  @media (--t) {
    min-width: 550px;
    max-width: 600px;

    border-right: 1px solid #2f3336;
  }
}
</style>
