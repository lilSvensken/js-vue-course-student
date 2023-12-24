<template>
    <div class="recipe-container">
      <h3>Мои рецепты</h3>
      <div class="card" v-for="(recipe, index) in recipes">
        <div class="card-body">
          <div class="card-body__header">
            <h4>
              {{recipe.name}}
            </h4>
            <svg><VeganIcon></VeganIcon></svg>
            {{recipe.vegan}}
            <svg><TimeIcon></TimeIcon></svg>
            {{recipe.cookTime}}
          </div>
          <div>
          Ингредиенты: {{recipe.ingredients}}
          </div>
          <button class="btn btn-light card-body__remove-button" @click="removeRecipe(index)">
            Удалить рецепт
          </button>
        </div>
      </div>
      <div v-if="recipes.length === 0" class="recipe-container__no-recipes">
        Рецептов нет
      </div>
    </div>
</template>

<script>
// Начало
import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";

export default {
  name: 'RecipesContainer',
  components: {VeganIcon, TimeIcon},
  props: ['recipes'],
  methods: {
    removeRecipe(index) {
      this.$emit('remove', index);
    }
  }
}
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