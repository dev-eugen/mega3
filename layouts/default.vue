<template>
  <div>
    <hero :rootNames="rootNames" ></hero> 
    <Nuxt />
    <Card 
    :rating="rating" 
    @changeRating="changeRating" 
    crd-text="Versus" 
    cln-text="Spring Colection"
    drs-text="Evening Dress"
    prc-text="250$"
    />
    <CategoryCard/>
    <Swiper/>
    <Footer/>
  </div>
</template>
<script>
import { ssrRef , defineComponent} from '@nuxtjs/composition-api'
import useCategories from "@/api/useCategories"
export default defineComponent({
  components: {
    Hero: () => import("@/components/Sections/Hero"),
    Footer: () => import("@/components/Sections/Footer"),
    Card: () => import("@/components/ProductCard"),
    CategoryCard: () => import("@/components/CategoryCard"),
    Swiper: () => import("@/components/Swiper")
  },
  setup(props) {
    const rating = ssrRef(2)

    const changeRating = (i) => {
      rating.value = i
    }

    return{
      rating,
      changeRating,
      ...useCategories()
    }
  }
})
</script>

<style lang="postcss">
html {
  @apply font-sans
}
</style>
