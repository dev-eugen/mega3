 
    export const state = () => ({
        categories: null
    })
    export const getters = () => ({
        categories: (state) => {
            return state.categories
        }
    })
    export const mutations = {
        updateCategories(state, payload) {
            state.categories = payload;
        }
    }
    export const actions = {
        async updateCategories({ commit }) {
            const payload =  await this.$axios.$get('all-product-categories')
            commit('updateCategories', payload.data);
        }
    }
