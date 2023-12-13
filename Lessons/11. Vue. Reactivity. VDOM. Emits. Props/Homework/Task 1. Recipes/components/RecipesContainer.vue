<template>
  <div class="recipe-container">
    <h3>
      Мои рецепты
    </h3>
    <div v-if="recipes.length > 0" class="card" v-for="(recipe, index) in recipes" :key="index">
      <div class="card-body">
        <div class="card-body__header">
          <h4>
            {{recipe.recipeName}}
          </h4>
          <svg>
            <VeganIcon/>
          </svg>
          {{ recipe.isVegetarian ? 'Да' : 'Нет' }}
          <svg>
            <TimeIcon/>
          </svg>
          {{recipe.cookTime}}
        </div>
        Ингредиенты:
        {{recipe.ingredients}}
        <button class="btn btn-light card-body__remove-button" @click="removeRecipe(index)">
          Удалить рецепт
        </button>
      </div>
    </div>
    <!-- Нижерасположенный div выводится в случае, если рецептов нет-->
    <div v-else class="recipe-container__no-recipes">
      Рецептов нет
    </div>
  </div>
</template>

<script>
import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";

export default {
  name: 'RecipesContainer',
  components: {VeganIcon, TimeIcon},
  props: {
    recipes: Array,
  },
  methods: {
    removeRecipe(index) {
      this.$emit('removeRecipe', index);
    },
  },
};
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