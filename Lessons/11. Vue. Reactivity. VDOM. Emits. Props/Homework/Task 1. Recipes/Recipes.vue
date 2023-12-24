<template>
    <div class="recipes">
        <newRecipeForm @addRecipe="addRecipe" />
        <recipesContainer :recipes="recipes" @removeRecipe="removeRecipe" />
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    components: {
        'newRecipeForm': NewRecipeForm,
        'recipesContainer': RecipesContainer,
    },
    data() {
        return {
            recipes: [],
        };
    },
    methods: {
        addRecipe(newRecipe) {
            this.recipes.push(newRecipe);
        },
        removeRecipe(index) {
            this.recipes.splice(index, 1);
        },
    },
};
</script>

<style>
.recipes {
    width: 1000px;
    margin: 40px;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background: whitesmoke;
    border-radius: 15px;
}

.recipes > div {
    width: 50%;
}
</style>