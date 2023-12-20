<template>
    <!--Начало-->
    <div class="recipe-container">
        <h3>Мои рецепты</h3>
        <div v-if="recipes.length === 0" class="recipe-container__no-recipes">
            Рецептов нет
        </div>
        <div v-else>
            <div v-for="(recipe, index) in recipes" :key="index" class="card">
                <div class="card-body">
                    <div class="card-body__header">
                        <h4>{{ recipe.title }}</h4>
                        <VeganIcon/>
                        <span v-if="recipe.isVegetarian">Да</span>
                        <span v-else>Нет</span>
                        <TimeIcon/>
                        <span>{{ recipe.cookingTime }}</span>
                    </div>
                    <div>Ингредиенты: {{ recipe.ingredients }}</div>
                    <button class="btn btn-light card-body__remove-button" @click="deleteRecipe(index)">
                        Удалить рецепт
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!--Конец-->
</template>

<script>
 import TimeIcon from '../icons/TimeIcon.vue';
 import VeganIcon from '../icons/VeganIcon.vue';
// Начало
export default {
    name: 'RecipesContainer',
    components: {
        TimeIcon,
        VeganIcon,
    },
    props: {
        recipes: {
            type: Array,
            required: true,
        },
    },
    methods: {
        deleteRecipe(index) {
            this.$emit('deleteRecipe', index);
        },
    },
};
// Конец
</script>

<style>
.recipe-container svg {
    width: 20px;
    margin-left: 16px;
    margin-right: 5px;
}

.card {
    margin-bottom: 15px;
}

.card-body__header {
    display: flex;
    align-items: center;
}

.recipe-container__no-recipes {
    font-size: 20px;
    margin-top: 15px;
}

.card-body__remove-button {
    display: block;
    margin-top: 10px;
}
</style>