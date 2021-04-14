<template>
    <div class="container mx-auto rounded-lg p-12 my-8 pb-20 pl-20 pr-20 relative" style="background: #fff;">
      <img src="img/slider_catalog_icon2.svg" alt="" class="mx-auto">
      <h5 class="text-green-dark text-3xl font-bold text-center uppercase mt-4 mb-10">auto</h5>

      <swiper class="swiper pb-4" :options="swiperOption">
        <swiper-slide v-for="(category, i) in categories" :key="i"><CategoryCard :text="category.text" :img="category.img" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prevs swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-nexts swiper-button-next" slot="button-next"></div>
      <a href="#" class="mx-auto w-12 h-12 rounded-full flex justify-center	items-center text-center mt-8" style="background: #BEDAC2;"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg></a>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { ref , defineComponent, reactive } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'swiper-example-pagination-progress',
  title: 'Progress pagination',
  components: {
    Swiper,
    SwiperSlide,
    CategoryCard: () => import("@/components/CategoryCard")
  },
  props: {
    categories: {
      type: Array,
      require: true 
    },
  },
  data() {
    return {
      // categories: [
      //   {
      //     img:'img/slider_catalog_icon2.svg',
      //     text: 'text'
      //   },
      //   {
      //     img:'img/slider_catalog_icon2.svg',
      //     text: 'text'
      //   },
      //   {
      //     img:'img/slider_catalog_icon2.svg',
      //     text: 'text'
      //   },
      //   {
      //     img:'img/slider_catalog_icon2.svg',
      //     text: 'text'
      //   }
      // ],

      swiperOption: {
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-nexts',
          prevEl: '.swiper-button-prevs'
        },
        breakpoints: {
          1024: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          640: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1,
          }
        }
      }
    }
  },
  setup () {
        return {}
    }
})

</script>

<style lang="scss" scoped>
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after{
    color: rgba(36, 131, 50);
  }
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after{
    color: rgba(36, 131, 50);
  }
  .swiper-button-prev, .swiper-button-next{
    top: 48%;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    right: 45px;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    left: 45px;
  }
  :focus{
    outline: none;
  }
  .swiper .swiper-pagination{
    top: auto;
    bottom: 0!important;
    width: 100%!important;
    left: 0!important;
    right: 0!important;
    height: 9px;
    border-radius: 10px;
  }
  .swiper-pagination.swiper-pagination-progressbar{
    background: #BEDAC2;
  }
  .swiper{
    padding-bottom: 3rem!important;
  }
</style>