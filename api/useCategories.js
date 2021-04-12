import { useStore, ssrRef } from "@nuxtjs/composition-api"

export default function useCategories() {
  // import
  const categories = useStore().state.categories.categories
  const rootNames = useStore().state.categories.rootNames

  // std methods

  const getById = (id) => {
    return categories.find((e) => e.id == id)
  }

  const filterByParent_Id = (id) => {
    return categories.filter((e) => e.parent_id == id)
  }

  

  return { rootNames }
}
