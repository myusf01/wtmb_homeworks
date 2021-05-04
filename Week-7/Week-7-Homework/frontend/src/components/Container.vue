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

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
}
</style>
