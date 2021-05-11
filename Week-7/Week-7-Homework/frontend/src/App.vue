<template>
  <div id="app">
    <MasterHeader />
    <main class="main">
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>

<script>
import MasterHeader from '@/components/Header'
import Container from '@/components/Container'
export default {
  name: 'App',
  components: {
    MasterHeader,
    Container
  }
}
</script>
<style lang="postcss" scoped>
#app {
  display: flex;
  justify-content: center;
}
.main {
  display: flex;
  padding: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>
