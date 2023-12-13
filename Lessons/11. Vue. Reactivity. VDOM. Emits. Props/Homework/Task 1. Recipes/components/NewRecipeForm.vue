<template>
  <div class="recipes">
    <div class="recipe-form">
      <h3>
        Создать новый рецепт
      </h3>
      <div class="recipe-form__block">
        <label class="form-label">
          Название нового рецепта
        </label>
        <input v-model="recipeName"
            type="text"
            class="form-control recipe-form__name"
        >
      </div>
      <div class="recipe-form__block">
        <label class="form-label">
          Ингредиенты
        </label>
        <textarea v-model="ingredients" class="form-control recipe-form__ingredients"></textarea>
      </div>
      <div class="recipe-form__block">
        <label class="form-label">
          Последовательность действий
        </label>
        <textarea v-model="recipeText" class="form-control recipe-form__recipe-text"></textarea>
      </div>
      <div class="recipe-form__block"><label class="form-label">
        Время приготовления
      </label>
        <select v-model="cookTime" class="form-select recipe-form__cook-time">
          <option v-for="(item) in timeOptions" :value=item.text :key="item.value">
            {{item.text}}
          </option>
        </select>
      </div>
      <div class="recipe-form__block">
        <input v-model="isVegetarian"
            type="checkbox"
            class="form-check-input"
        >
        <label class="form-check-label">
          Вегетарианское блюдо
        </label>
      </div>
      <div class="recipe-form__block">
        <button class="btn btn-dark recipe-form__add-button" @click="addRecipe">
          Добавить рецепт
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'NewRecipeForm',
  data() {
    return {
      recipeName: '',
      ingredients: '',
      recipeText: '',
      cookTime: '',
      isVegetarian: '',
      timeOptions: [
        {value: 1, text: '5 минут'},
        {value: 2, text: '10 минут'},
        {value: 3, text: '15 минут'},
        {value: 4, text: '20 минут'},
        {value: 5, text: '30 минут'},
        {value: 6, text: '40 минут'},
        {value: 7, text: '50 минут'},
        {value: 8, text: '1 час'},
        {value: 9, text: '1,5 часа'},
        {value: 10, text: '2 часа'},
        {value: 11, text: '2,5 часа'},
        {value: 12, text: '3 часа'},
        {value: 13, text: 'Бесконечность'},
      ],
    };
  },
  methods: {
    addRecipe() {
      const newRecipe = {
        recipeName: this.recipeName,
        ingredients: this.ingredients,
        recipeText: this.recipeText,
        cookTime: this.cookTime,
        isVegetarian: this.isVegetarian,
      };
      this.$emit('addRecipe', newRecipe);
      this.recipeName = '';
      this.ingredients = '';
      this.recipeText = '';
      this.cookTime = '5 минут';
      this.isVegetarian = false;
    },
  },
};
</script>

<style>
.recipe-form {
  max-width: 350px;
  margin-right: 40px;
}

.recipe-form__block {
  margin-bottom: 15px;
}
</style>