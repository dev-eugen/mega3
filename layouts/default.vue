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


<style>

</style>
