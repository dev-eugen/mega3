<template>
  <div>
    <div class=" bg-gray-100">
      <nav class="bg-green-600 shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex lg:bg-green-500">
              <div class="flex flex-col bg-green-500">
                <div class="mt-4 flex-shrink-0 flex items-center px-8">
                  <img
                    class="block h-8 w-auto"
                    src="/img/logo_header.png"
                    alt="Workflow"
                  />
                </div>
                <div class="z-50 mt-4 bg-green-500 pl-8 pb-3 rounded-b-lg">
                  <div
                    class="absolute shadow-xl overflow-y-auto rounded-md bg-white h-96  top-18 mt-3 z-10 ml-5 left-1/2 transform -translate-x-1/2 w-screen max-w-md sm:px-0 lg:max-w-3xl"
                  >
                    <div class="scr flex flex-wrap">
                      <div
                        class=" w-2/6 p-4 flex flex-col justify-start text-green-500"
                        v-for="i in 7"
                        :key="i"
                      >
                        <div class="flex flex-col">
                          <h3 class="font-bold ">
                            <nuxt-link class="hover:text-green-600" to="#"
                              >Some header</nuxt-link
                            >
                          </h3>
                          <nuxt-link
                            class="hover:text-green-600"
                            v-for="i in 7"
                            :key="i"
                            to="#"
                            >Category name</nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="mt-5 flex flex-col font-bold">
                    <li
                      v-for="i in 10"
                      :key="i"
                      class="flex justify-between items-center hover:bg-green-600  rounded-l-lg"
                    >
                      <a
                        href="#"
                        class="text-white p-1 ml-2 hover:text-gray-300 "
                      >
                        Link
                      </a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-white flex order-last pr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </li>
                  </ul>

                  <div class="flex justify-center pr-8 my-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7 text-white hover:text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                class="mr-2 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                class="mr-2 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                class="mr-2 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-700"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div>
      <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="index in 6" :key="index">
            <img src="img/header_bg_main.jpg" alt="" srcset="" />
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"  slot="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slider .slider-pagination-bullets{
  background: violet;
}
</style>
