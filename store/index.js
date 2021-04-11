 
    export const actions = {
        async nuxtServerInit({ dispatch }) {
            await dispatch('categories/updateCategories')
        }
    }
