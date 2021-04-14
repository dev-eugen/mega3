<template>
  <div>
    <hero :rootNames="rootNames" ></hero> 
    <Nuxt />
    <Footer/>
  </div>
</template>
<script>
import { ssrRef , defineComponent} from '@nuxtjs/composition-api'
import useCategories from "@/api/useCategories"
export default defineComponent({
  components: {
    Hero: () => import("@/components/Sections/Hero"),
    Footer: () => import("@/components/Sections/Footer")
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
