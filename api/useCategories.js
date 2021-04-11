
import { useStore, ssrRef } from '@nuxtjs/composition-api'

export default function useCategories() {

    const categories = useStore().state.categories.categories

    console.log(categories)

    const rootNames = ssrRef([])
    categories.forEach(element => {
        element.parent_id == 0 ? rootNames.value.push(element.name) : null
    })


  return { rootNames }
}