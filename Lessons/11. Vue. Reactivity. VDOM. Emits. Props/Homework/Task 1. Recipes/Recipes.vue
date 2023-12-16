<template>
    <div class="recipes">
        <!--Начало-->
        <NewRecipeForm
            :newRecipe="newRecipe"/>
        <RecipesContainer
            :recipe="newRecipe"
            @remove-recipe="removeRecipe"/>
        <!--Конец-->
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
    // Начало
    data() {
        return {
            newRecipe: []
        }
    },
    components: {
        NewRecipeForm,
        RecipesContainer
    },
    methods: {
        removeRecipe(id) {
            this.newRecipe = this.newRecipe.filter((recipe) => {
                return recipe.id !== id;
            })
        }
    }
    // Конец
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