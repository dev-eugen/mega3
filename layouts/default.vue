<template>
  <div>
    <hero></hero>
    <footer></footer>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

export default {
  components: {
    Hero: () => import("@/components/Sections/Hero"),
    Footer: () =>import("@/components/Sections/Footer")
   
  }
}
</script>


<style lang="postcss">
html{
  @apply font-sans font-bold
}
</style>
