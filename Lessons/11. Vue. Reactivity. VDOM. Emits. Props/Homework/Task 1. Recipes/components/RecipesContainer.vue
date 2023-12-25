<template>
    <div class="recipe-container">
        <h3>Мои рецепты</h3>
        <div v-if="recipes.length === 0" class="recipe-container__no-recipes">Рецептов нет</div>
        <div class="card" v-for="(recipe, index) in recipes" :key="index">
            <div class="card-body">
                <div class="card-body__header">
                    <button class="btn btn-light card-body__remove-button" @click="removeRecipe(index)">Удалить рецепт</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['recipes'],
    methods: {
        removeRecipe(index) {
            this.$emit('removeRecipe', index); 
        }
    }
};
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