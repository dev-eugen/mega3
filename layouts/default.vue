<template>
  <div>
    <hero></hero>
    <Nuxt />
    <Card />
    <Footer/>
  </div>
</template>
<script>
export default {
  components: {
    Hero: () => import("@/components/Sections/Hero"),
    Footer: () => import("@/components/Sections/Footer"),
    Card: () => import("@/components/Sections/Card")
  },
};
</script>

<style lang="postcss">
html {
  @apply font-sans
  
}


</style>
