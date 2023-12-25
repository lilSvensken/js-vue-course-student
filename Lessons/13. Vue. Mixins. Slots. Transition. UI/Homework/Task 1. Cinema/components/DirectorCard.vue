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
    name: 'DirectorCard', 
    components: { CardBlock },
    props: {
        director: Object, 
    },
};
</script>

<style>
.director__info-name {
    font-size: 18px;
    font-weight: bold;
}

.director__title {
    font-size: 16px;
    font-weight: bold;
}
</style>