<template>
  <div>
    <hero></hero>
    <Nuxt />
    <Card :rating="rating" @changeRating="changeRating" crd-text="Versus"/>
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
  data() {
    return {
      rating: 3,
      
    }
  },
  methods: {
    changeRating(i) {
      this.rating = i
    }
  },
};
</script>

<style lang="postcss">
html {
  @apply font-sans
  
}


</style>
