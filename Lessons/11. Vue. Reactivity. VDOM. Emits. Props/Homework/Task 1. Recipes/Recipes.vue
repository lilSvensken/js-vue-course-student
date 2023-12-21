<template>
    <div class="recipes">
        <!--Начало-->
      <NewRecipeForm @add="addNewRecipe"></NewRecipeForm>
      <div class="recipe-container">
        <h3>
          Мои рецепты
        </h3>
        <RecipesContainer v-for="(recipe,index) in recipes" :recipe-name="recipe.name" :recipe-ingredients="recipe.ingredients" :recipe-text="recipe.text" :recipe-cook-time="recipe.cookTime" :recipe-vegan="recipe.vegan" @delete="deleteRecipe(index)"></RecipesContainer>
        <div class="recipe-container__no-recipes" v-if="recipes.length === 0">
            Рецептов нет
        </div>
    </div>
    </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";
import RecipesContainer from "./components/RecipesContainer.vue";

export default {
    name: 'Recipes',
  components: {RecipesContainer, NewRecipeForm},
    // Начало
  data(){

      return {
        recipes: [
        ],
      };
  },
  methods: {
      addNewRecipe(recipeName, recipeIngredients, recipeText, recipeCookTime, recipeVegan){
        let vegan = "нет";
        if (recipeVegan){
          vegan = "да"
        }
        this.recipes.push({name: recipeName, ingredients: recipeIngredients, text: recipeText, cookTime: recipeCookTime, vegan: vegan});
        console.log(this.recipes);
      },
    deleteRecipe(index) {
        console.log("del")
      console.log(index)
        this.recipes.splice(index, 1);
        console.log(this.recipes)
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
.recipe-container__no-recipes {
  font-size: 20px;
  margin-top: 15px;
}
</style>