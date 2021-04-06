<template>
  <div>
    <Nuxt />
    <hero></hero>
   
    <footer> <Footer /></footer>

   
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
