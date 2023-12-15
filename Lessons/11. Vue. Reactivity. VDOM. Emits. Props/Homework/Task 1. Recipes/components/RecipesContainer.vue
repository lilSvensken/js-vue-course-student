<template>
    <!--Начало-->
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
</template>

<script>
// Начало

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