
export const state = () => ({
    categories: null,
    rootNames: null
})
export const getters = () => ({
    categories: (state) => {
        return state.categories
    }
})
export const mutations = {
    updateCategories(state, payload) {
        state.categories = payload;
    },
    updateRootNames(state, payload) {
        state.rootNames = payload;
    }
}
export const actions = {
    async updateCategories({ commit }) {
        const payload = await this.$axios.$get('all-product-categories')
        commit('updateCategories', payload.data);
        const rootNames = []
        payload.data.forEach((element) => {
            element.parent_id == 0 ? rootNames.push(element.name) : null
        })
        commit('updateRootNames', rootNames)
    }
}
