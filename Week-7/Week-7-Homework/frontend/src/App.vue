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
  height: 100%;
}
.main {
  display: flex;
  padding: 40px;
  margin-bottom: 100px;
  overflow: overlay;
  @media (--t) {
    margin-bottom: 0px;
  }
}

.container {
}
</style>
