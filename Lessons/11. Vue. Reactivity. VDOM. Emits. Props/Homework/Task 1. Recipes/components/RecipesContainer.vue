<template>
    <!--Начало-->
  <div class="card">
    <div class="card-body">
      <div class="card-body__header">
        <h4>
          {{ recipeName }}
        </h4>
        <svg> <VeganIcon></VeganIcon> </svg>
        {{ recipeVegan }}
        <svg> <TimeIcon></TimeIcon> </svg>
        {{ recipeCookTime }}
      </div>
      {{recipeIngredients}}
      <button class="btn btn-light card-body__remove-button" @click="detele">
        Удалить рецепт
      </button>
    </div>
  </div>
    <!--Конец-->
</template>

<script>
// Начало
import VeganIcon from "../icons/VeganIcon.vue";
import TimeIcon from "../icons/TimeIcon.vue";

export default {
  name: 'RecipesContainer',
  components: {TimeIcon, VeganIcon},
  props: ["recipeName", "recipeIngredients", "recipeText", "recipeCookTime", "recipeVegan"],
  emits: ["delete"],
  methods: {
    detele() {
      this.$emit("delete")
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