<template>
  <div class="flex justify-center mt-12  ">
    <div
      class=" border-b border-r border-l border-t  border-green-dark w-60 rounded-md shadow-lg drop-shadow-lg "
    >
      <div class="mt-1 mx-1  h-48 shadow-lg "  style="background: url('img/catalog_img.png'); background-position:center; top; no-repeat;">
        
      </div>
      <div
        class="flex justify-center text-green-dark mt-4 font-bold uppercase "
      >
        <h1>versus</h1>
      </div>
      <div class="flex justify-center items-center pt-2 space-x-2  ">
        <button
        v-for="i in 5"
        :key="i"
          class="rounded-full transition duration-500 ease-in-out bg-white text-green-light transform hover:scale-110 focus:outline-none"
        >

        <svg @click="$emit('changeRating', i)" v-if="i <= rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>


          <svg @click="$emit('changeRating', i)" v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>

          
        </button>
      </div>

      <div class="flex justify-center text-green-dark mt-2">
        <p>Srping Collection</p>
      </div>
      <div class="text-green-dark flex justify-center">
        <p class="font-bold">Evening Dress</p>
      </div>
      <div class="flex flex-row items-center h-16">
        <div class="flex justify-center w-1/2 ">
        <h1 class="text-red-600 font-bold  text-2xl">250$</h1>
        <h1 class="text-gray-500 line-through mt-2 ml-1">250$</h1>
        </div>
        <div class="flex justify-end w-1/2">
        <button
            class="rounded-full shadow-sm mr-4 text-white bg-green-dark hover:bg-green-dark focus:outline-none focus:ring-1 focus:ring-offset-1 animate-pulse border-4 border-green-dark  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </button>
        </div>
        <!-- <h1 class="text-red-600 font-bold ml-4 mt-2 text-2xl">250$</h1>
        <p></p>
        <h1 class="text-gray-500 line-through ml-8">250$</h1>
        <div class="flex justify-end  mr-4 h-4 items-end ">
          <button
            class="rounded-full shadow-sm text-white bg-green-dark hover:bg-green-dark focus:outline-none focus:ring-1 focus:ring-offset-1 animate-pulse border-4 border-green-dark  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              />
            </svg>
          </button>
        </div> -->
      </div>

      <!--  <div class="flex justify-end content-end mt-64 mr-4 ">  
<button type="button" class="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-green-dark hover:bg-green-dark focus:outline-none focus:ring-1 focus:ring-offset-1 animate-pulse ">
 
     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
</svg>
</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0
    },
  },
};
</script>
