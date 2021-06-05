<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'container'
}
</script>

<style lang="postcss" scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100%;
  width: 100%;
  margin-right: 0px;
  @media (--t) {
    margin-right: 100px;
  }
}
</style>
