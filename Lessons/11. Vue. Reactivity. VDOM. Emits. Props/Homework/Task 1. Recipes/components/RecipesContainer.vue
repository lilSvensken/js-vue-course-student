<template>
  <div class="recipe-container">
    <h3>
      Мои рецепты
    </h3>
    <div class="recipe-container__no-recipes" v-if="recipes.length === 0">
      Нет рецептов
    </div>
    <div class="card" v-for="item in recipes" :key="item.id">
      <div class="card-body">
        <div class="card-body__header">
          <h4> {{ item.recipeName }} </h4>
          <VeganIcon/> {{ item.isVegan ? 'Да' : 'Нет'}}
          <TimeIcon/> {{ item.selectedTime }}
        </div>
        Ингредиенты: {{ item.recipeIngredients }}
        <button class="btn btn-light card-body__remove-button" @click="deleteRecipe(item)">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";

export default {
  name: 'RecipesContainer',
  props: {
    recipes: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  components: {VeganIcon, TimeIcon},
  methods:{
    deleteRecipe(recipe) {
      this.$emit('deleteRecipe', recipe)
    },
  }
}

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
