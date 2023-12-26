import { defineStore } from 'pinia'

export const PostsStore = defineStore('post-store', {
    state: () => ({
        //Храним переменные в state, кот изменяются
        posts: [],
        isLoading: false,
        error: null
    }),

    actions: {
        // для ф-ий
        async fetchPosts() {
            //СОхраняем полученные данные
            //this.posts = [1,2,3]
            this.isLoading = true
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET',   
            })
             .then(res => res.json())
             .then(res => {
                this.isLoading = false
                this.posts = res
             })
             .catch(err => {
                this.error = err
             })
        },
        clearPosts() {
            this.posts = []
        }
    },

    getters: {
        // для ф-ий, возвращающих вычисляемые данные
        getFirstPost(state) {
            return state.posts[0]
        }
    }
})