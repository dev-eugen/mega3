<template>
  <div>
    <CategorySwiper/>
  </div>
</template>

<script>

export default {
  layout: 'default',
  components: {
    CategorySwiper: () => import("@/components/CategorySwiper")
  },
};
</script>

<style lang="scss" scoped>
</style>
