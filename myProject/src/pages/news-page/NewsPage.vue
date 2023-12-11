<template>
    <div>News</div>

    <router-link to="/">
        перейти на новости
    </router-link>
    <button>перейти на главную</button>

</template>

<script>
import MainPage from '../main-page/MainPage.vue'
export default {
    name: 'NewsPage',
    computed: {
        MainPage() {
            return MainPage
        },
        methods: {
            toMainPage() {
                this.$router.push('/')
            }
        }
    }
}
</script>