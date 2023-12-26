<template>
    <div>
        <h1>список постов</h1>
        
        <div v-if="postsStore.isLoading">Загрузка...</div>

        <div v-if="postsStore.error">
            ОШбика {{ postsStore.error }}
        </div>
        <ul>
            <li v-for="(itemPost, index) in postsStore.posts"
                :key="index"
            >
                {{ itemPost.title }}
            </li> 
        </ul>
        <button @click="fetchPost">получить посты</button>
        <button @click="onClear">очистить посты</button>

    </div>
</template>

<script>
import { PostsStore } from '../../stores/posts.store';

export default {
    name: 'ListPage',
    setup() {
        const postsStore = PostsStore()
        return {postsStore}
    },
    methods: {
        fetchPost() {
            this.postsStore.fetchPosts()
                .then(() => {
                    alert('посты получены')
                })
                .catch(() => {
                    alert('посты не получены')
                })
        },
        onClear() {
            this.postsStore.clearPosts()
        }
    }
}
</script>