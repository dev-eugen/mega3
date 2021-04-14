<template>
    <div class="text-center mx-4">
        <a href="#" class="w-full max-w-xs block hover:opacity-80 duration-200">
          <img :src="img" alt="" class="h-80 w-full rounded-lg object-cover object-center">
          <h6 class="text-green-dark text-xl font-bold text-center uppercase mt-3">{{ text }}</h6>
        </a>
    </div>
</template>

<script>
import { ref , defineComponent, reactive } from '@nuxtjs/composition-api'
export default defineComponent({
    props: {
        img: {
            type: String,
            require: true 
        },
        text: {
            type: String,
            require: true 
        }
    },
    setup () {
        

        return {}
    }
})
</script>

<style lang="scss" scoped>

</style>