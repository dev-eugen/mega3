<template>
  <div>
    <TitleMainPage/>
    <CategorySwiper/>
  </div>
</template>

<script>

export default {
  layout: 'default',
  components: {
    CategorySwiper: () => import("@/components/CategorySwiper"),
    TitleMainPage: () => import("@/components/TitleMainPage")
  },
};
</script>

<style lang="scss" scoped>
</style>
