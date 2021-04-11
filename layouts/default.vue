<template>
  <div>
    <hero></hero>
    <Nuxt />
    <Card 
    :rating="rating" 
    @changeRating="changeRating" 
    crd-text="Versus" 
    cln-text="Spring Colection"
    drs-text="Evening Dress"
    prc-text="250$"
    />
    <Footer/>
  </div>
</template>
<script>
export default {
  components: {
    Hero: () => import("@/components/Sections/Hero"),
    Footer: () => import("@/components/Sections/Footer"),
    Card: () => import("@/components/cardProduct")
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
