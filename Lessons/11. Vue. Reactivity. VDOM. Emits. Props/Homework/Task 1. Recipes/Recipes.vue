<template>
  <div class="recipes">
    <!--Начало-->

      <NewRecipeForm></NewRecipeForm>

<!--    <RecipesContainer></RecipesContainer>-->
            <div class="recipe-container">
      <h3>
        Мои рецепты
      </h3>
      <div class="card">
        <div class="card-body">
          <div class="card-body__header">
            <h4>
              Отбивные из свинины
            </h4>
            <svg> <!-- иконка VeganIcon --> </svg>
            Нет
            <svg> <!-- иконка TimeIcon --> </svg>
            40 минут
          </div>
          Ингредиенты:
          свинина, яйца, мука
          <button class="btn btn-light card-body__remove-button">
            Удалить рецепт
          </button>
        </div>
      </div>
      <!-- Нижерасположенный div выводится в случае, если рецептов нет -->
      <div class="recipe-container__no-recipes">
          Рецептов нет
      </div>
  </div>
  <!--Конец-->
  </div>
</template>

<script>
import NewRecipeForm from "./components/NewRecipeForm.vue";

export default {
  name: 'Recipes',
  components: {NewRecipeForm},
  // Начало

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
.recipe-form{
  padding-left: 10px;
  padding-right: 10px;
}
.recipe-container{
  padding-left: 10px;
  padding-right: 10px;
}
.recipes > div {
  width: 50%;
}
</style>