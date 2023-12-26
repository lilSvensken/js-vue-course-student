<template>
    <div class="recipes">
      <NewRecipeForm @addRecipe="addNewRecipe" />
      <RecipesContainer :recipes="recipes" @deleteRecipe="deleteRecipe" />
    </div>
</template>

<script>
export default {
    name: 'Recipes',
  components: {
    NewRecipeForm,
    RecipesContainer,
  },
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    addNewRecipe(recipe) {
      this.recipes.push(recipe);
    },
    deleteRecipe(index) {
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