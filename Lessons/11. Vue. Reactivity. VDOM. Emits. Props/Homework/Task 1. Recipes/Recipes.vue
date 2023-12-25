<template>
    <div class="recipes">
      <div class="recipe-form">
        <NewRecipeForm @addRecipe="addRecipe" />
      </div>
      <div class="recipe-container">
        <h3>Мои рецепты</h3>
        <RecipesContainer :recipes="recipes" @removeRecipe="removeRecipe" />
      </div>
    </div>
  </template>
  
  <script>
  import NewRecipeForm from './components/NewRecipeForm.vue';
  import RecipesContainer from './components/RecipesContainer.vue';
  
  export default {
    name: 'Recipes',
    components: {
      NewRecipeForm,
      RecipesContainer
    },
    data() {
      return {
        recipes: []
      };
    },
    methods: {
      addRecipe(recipe) {
        this.recipes.push(recipe);
      },
      removeRecipe(recipeIndex) {
        this.recipes.splice(recipeIndex, 1);
      }
    }
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