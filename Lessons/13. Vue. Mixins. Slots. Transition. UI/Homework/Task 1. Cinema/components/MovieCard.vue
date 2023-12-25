<template>
    <CardBlock>
        <template v-slot:default>
            
        </template>
        <template v-slot:info>
            
        </template>
    </CardBlock>
</template>

<script>

import CardBlock from './CardBlock.vue';

export default {
    name: 'MovieCard', 
    components: { CardBlock },

    props: {
        movie: Object,
    },

};
</script>

<style>
.movie__info-name {
    font-size: 18px;
    font-weight: bold;
}

.movie__title {
    font-size: 16px;
    font-weight: bold;
}
</style>