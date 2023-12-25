<template>
    <div class="recipes">
        <!--Начало-->
      <NewRecipeForm :recipe="recipes"/>
      <RecipesContainer :recipes="recipes" @removeRecipe="removeRecipe"/>
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
        recipes: [],
      }
    },
    components: { NewRecipeForm, RecipesContainer },
    methods: {
      addRecipe(name, ingredients, actionSequence, cookingTime, isVegan) {
        this.recipes.push({
              name: name,
              ingredients: ingredients,
              actionSequence: actionSequence,
              cookingTime: cookingTime,
              isVegan: isVegan,
        });
      },
      removeRecipe(index) {
        this.recipes.splice(index, 1);
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