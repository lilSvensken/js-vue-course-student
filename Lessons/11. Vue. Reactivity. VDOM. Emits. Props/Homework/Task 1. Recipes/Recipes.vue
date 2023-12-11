<template>
    <div class="recipes">
        <!--Начало-->
      <new-recipe-form @addRecipe="addRecipe" />
      <recipes-container :recipes="recipes" @removeRecipe="removeRecipe" />
      <!--Конец-->
    </div>
</template>

<script>
export default {
    name: 'Recipes',
    // Начало
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
    removeRecipe(index) {
      this.recipes.splice(index, 1);
    },
  },
  components: {
    NewRecipeForm,
    RecipesContainer,
  },
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