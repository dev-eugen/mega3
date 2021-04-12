import { useStore, ssrRef } from "@nuxtjs/composition-api"

export default function useCategories() {
  // import
  const categories = useStore().state.categories.categories

  // std methods

  const getById = (id) => {
    return categories.find((e) => e.id == id)
  }

  const filterByParent_Id = (id) => {
    return categories.filter((e) => e.parent_id == id)
  }

  
  const rootNames = ssrRef([])
  categories.forEach((element) => {
    element.parent_id == 0 ? rootNames.value.push(element.name) : null
  })

  

  return { rootNames }
}
