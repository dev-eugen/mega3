<template>
  <div>
    <div class="bg-green-light">
      <!-- Navbar -->
      <nav class="bg-green-dark shadow-lg">
        <!-- Element container of navbar -->
        <div class=" mx-auto bg">
          <!-- Central container of Element container -->
          <div class="flex justify-between h-16 bg">
            <!-- Logo block -->
            <div class="hidden lg:flex lg:bg-green-light justify-center w-3/12">
              <!-- Img block -->
              <div class="flex items-center">
                <img
                  class="block h-8 w-auto"
                  src="/img/logo_header.png"
                  alt="Workflow"
                />
              </div>
            </div>

            <!-- Search -->
            <div
              class="mt-1 ml-2 flex items-center justify-center lg:w-5/12 text-white"
            >
              <input
                type="text"
                name="email"
                v-model="input_value"
                id="email"
                class="shadow-sm mr-1 w-full focus:ring-green-light focus:border-green-light block sm:text-sm border-green-light rounded-3xl bg-green-light"
                placeholder="Shoes, dress, hats"
              />
              <button
                class="ml-1 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            <!-- Menu -->
            <div
              @click="sidebar_visible = !sidebar_visible"
              class="lg:hidden mt-1 ml-2 flex items-center text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <!-- Icons list in end og navbar -->
            <div class="hidden lg:flex items-center">
              <button
                type="button"
                class="mr-3 px-4 py-2 border-transparent text-sm font-medium rounded-3xl shadow-sm text-white bg-green-light hover:bg-green-dark hover:ring-12 hover:border-green-light border-2"
              >
                Start buisness
              </button>
              <button
                class="mr-2 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-light"
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
                class="mr-2 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-light"
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
                class="mr-2 p-1 rounded-full text-white hover:text-gray-300 hover:bg-green-light"
              >
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
    <!-- Category list -->
    <div class="absolute flex flex-row w-screen ">
      <div
        class="hidden lg:flex md:flex z-50 flex-col justify-center bg-green-light rounded-br-lg w-3/12 "
      >
        <div class="overflow-x-auto h-auto ">
          <ul class="flex flex-col font-bold max-h-96">
            <li
              v-for="(name, i) in rootNames"
              :key="i"
              class="flex justify-between items-center hover:bg-green-dark"
              @click="visible = !visible"
              v-show="i < 0 || !more_toggle"
            >
              <a href="#" class="text-white p-1 pl-4 ml-2 hover:text-gray-300 ">
                {{ name }}
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
            <li class="flex justify-center">
              <div class="flex justify-center py-4 w-max">
          <svg
            @click="more_toggle = !more_toggle"
            v-if="more_toggle"
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
          <svg
            @click="
              more_toggle = !more_toggle;
              visible = false;
            "
            v-else
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
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
            </li>
          </ul>
        </div>
        
      </div>
      <!-- Category block -->
      <transition enter-active-class="opacity-0" leave-active-class="opacity-0">
        <div
          class="h-96 transition duration-150 ease-in-out transform  shadow-xl overflow-y-auto bg-white z-10 w-9/12"
          v-show="visible"
        >
          <div class="scr flex flex-wrap">
            <div
              class=" w-2/12 p-4 flex flex-col justify-start text-green-light"
              v-for="i in 7"
              :key="i"
            >
              <div class="flex flex-col">
                <h3 class="font-bold ">
                  <nuxt-link class="hover:text-green-dark" to="#"
                    >Some header</nuxt-link
                  >
                </h3>
                <nuxt-link
                  class="hover:text-green-dark"
                  v-for="i in 7"
                  :key="i"
                  to="#"
                  >Category name</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <!-- Sidebar -->
    <transition
      enter-active-class="opacity-0 -translate-x-full"
      leave-active-class="opacity-0 -translate-x-full"
    >
      <div
        v-show="sidebar_visible"
        class="transition duration-300 ease-in-out transform relative flex-col flex-grow border-r border-green-dark  pt-5 pb-4 bg-green-dark overflow-y-auto"
      >
        <div class="flex items-center justify-center px-4">
          <img class="h-8 w-auto" src="/img/logo_header.png" alt="Workflow" />
        </div>
        <div class="mt-5 flex-grow flex flex-col">
          <nav
            class="flex-1 px-2 bg-green-dark  space-y-1"
            aria-label="Sidebar"
          >
            <a
              href="#"
              class="text-white hover:bg-green-light hover:text-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              Account

              <span
                class="bg-green-light group-hover:bg-green-dark ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
              >
                5
              </span>
            </a>
            <a
              href="#"
              class="text-white hover:bg-green-light hover:text-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              Card

              <span
                class="bg-green-light group-hover:bg-green-dark ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
              >
                1
              </span>
            </a>
            <a
              href="#"
              class="text-white hover:bg-green-light hover:text-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              Setting

              <span
                class="bg-green-light group-hover:bg-green-dark ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
              >
                2
              </span>
            </a>
            <a
              v-for="i in 6"
              :key="i"
              href="#"
              class="text-white hover:bg-green-light hover:text-gray-100 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Title
              <span
                class="bg-green-light group-hover:bg-green-dark ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
              >
                {{ i }}
              </span>
            </a>
          </nav>
        </div>
      </div>
    </transition>
    <!-- Swiper-->
    <div>
      <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="index in 6" :key="index">
            <div
              class="bg-center bg-no-repeat"
              style="background: url('img/header_bg_main.jpg'); height:650px"
            ></div>
          </div>
        </div>
        <!-- Swiper pagination -->
        <div
          class="swiper-pagination swiper-pagination-bullets"
          slot="pagination"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"
import "swiper/css/swiper.css"
import { ref , defineComponent, reactive } from '@nuxtjs/composition-api'
export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  props: ['rootNames'],
  setup() {
    const input_value = ref("")
    const sidebar_visible = ref(false)
    const more_toggle = ref(true)
    const visible = ref(false)
    const swiperOptions =  reactive({
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        }
      })

    return {
      input_value, sidebar_visible, more_toggle, visible, swiperOptions
    }
  }
})
</script>

<style lang="postcss" scoped>
input::placeholder {
  @apply text-white font-medium ml-2 pl-2;
}

input {
  @apply h-2/3;
}
</style>
