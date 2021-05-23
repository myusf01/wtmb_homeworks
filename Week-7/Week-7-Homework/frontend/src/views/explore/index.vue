<template>
  <div class="Explore">
  <Page PageName="explore" ContentName="Hele Hele Explore">


  </Page>
    <Widgets/>
  </div>
</template>

<script>
// import CustomText from '@/components/CustomText'
import Widgets from '@/components/Main/Widgets.vue'
import Page from '@/components/Main/Page.vue'


export default {
  name: 'Explore',
  components: {
    Page,
    Widgets
  }
}
</script>

<style></style>
