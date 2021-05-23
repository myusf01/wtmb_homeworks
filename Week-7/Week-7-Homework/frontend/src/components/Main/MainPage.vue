<template>
  <div class="contentContainer">
    <Page :PageName="PageName" :ContentName="ContentName"> 


    <slot />
    </Page>

    <widgets/>
  </div>
</template>

<script>
import Page from './Page.vue'
import Widgets from './Widgets.vue'
export default {
  name: 'MainPage',
  props: {
    PageName: {
      type: String
    },
    ContentName: {
      type: String
    }
  },
  components: {
    Widgets,
    Page
  }
}
</script>
<style lang="postcss" scoped>
.contentContainer {
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
}
</style>
