<template>
  <div class="recipes">
    <NewRecipeForm :recipe="recipes"/>
    <RecipesContainer :recipes="recipes" @deleteRecipe="deleteRecipe"/>
  </div>
</template>

<script>

import RecipesContainer from "./components/RecipesContainer.vue";
import NewRecipeForm from "./components/NewRecipeForm.vue";

export default {
  name: 'Recipes',
  data() {
    return {
      recipes: [],
    }
  },
  components: { NewRecipeForm, RecipesContainer,},
  methods: {
    deleteRecipe(recipe) {
      const index = this.recipes.indexOf(recipe);
      if (index !== -1) {
        this.recipes.splice(index, 1);
      }
    }
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
