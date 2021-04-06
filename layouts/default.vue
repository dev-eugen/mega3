<template>
  <div>
    <hero></hero>
    <Nuxt />
  </div>
</template>

<script>
export default {
  components: {
    Hero: () => import("@/components/Sections/Hero"),
  }
}
</script>


<style lang="postcss">
html{
  @apply font-sans font-bold
}
</style>
