import { defineStore } from 'pinia'

export const mainStore = defineStore({
    id: 'main-store',
    state: () => {
        return {
            catalogData: []
        }
    },
    actions: {
        setCatalogData(payload) {
            this.catalogData = payload
        },
    },
    getters: {
        getCatalogData: state => state.catalogData,
    },
})