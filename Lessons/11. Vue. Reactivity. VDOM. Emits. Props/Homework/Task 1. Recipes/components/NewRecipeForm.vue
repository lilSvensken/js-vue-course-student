<template>
    <div class="recipe-form">
        <!--Начало-->
      <h3>
        Создать новый рецепт
      </h3>
      <div class="recipe-form__block">
        <label class="form-label">
          Название нового рецепта
        </label>
        <input type="text" class="form-control recipe-form__name" ref="recipeName">
      </div>
      <div class="recipe-form__block">
        <label class="form-label">
          Ингредиенты
        </label>
        <textarea class="form-control recipe-form__ingredients" ref="recipeIngredients"></textarea>
      </div>
      <div class="recipe-form__block">
        <label class="form-label">
          Последовательность действий
        </label>
        <textarea class="form-control recipe-form__recipe-text" ref="recipeText"></textarea>
      </div>
      <div class="recipe-form__block"><label class="form-label">
        Время приготовления
      </label>
        <select class="form-select recipe-form__cook-time" ref="recipeCookTime">
          <option :value="timeOption.value" v-for="timeOption in timeOptions">
            {{timeOption.text}}
          </option>
        </select>
      </div>
      <div class="recipe-form__block">
        <input type="checkbox" class="form-check-input" ref="recipeVegan">
        <label class="form-check-label">
          Вегетарианское блюдо
        </label>
      </div>
      <div class="recipe-form__block">
        <button class="btn btn-dark recipe-form__add-button" @click="sendForm()">
          Добавить рецепт
        </button>
      </div>
        <!--Конец-->
    </div>
</template>

<script>

export default {
    name: 'NewRecipeForm',
    data() {
    let recipeName;
    let recipeIngredients;
    let recipeText;
    let recipeCookTime;
    let recipeVegan;
    return {
            // Начало
          recipeName,
          recipeIngredients,
          recipeText,
          recipeCookTime,
          recipeVegan,
            // Конец
            // Опции для селекта "Время приготовления"
            timeOptions: [
                { value: 1, text: '5 минут' },
                { value: 2, text: '10 минут' },
                { value: 3, text: '15 минут' },
                { value: 4, text: '20 минут' },
                { value: 5, text: '30 минут' },
                { value: 6, text: '40 минут' },
                { value: 7, text: '50 минут' },
                { value: 8, text: '1 час' },
                { value: 9, text: '1,5 часа' },
                { value: 10, text: '2 часа' },
                { value: 11, text: '2,5 часа' },
                { value: 12, text: '3 часа' },
                { value: 13, text: 'Бесконечность' },
            ],
        };
    },
    // Начало
  emits: ["add"],
  methods: {
    sendForm() {
      this.recipeName = this.$refs.recipeName.value;
      console.log(this.recipeName)
      this.recipeIngredients = this.$refs.recipeIngredients.value;
      this.recipeText = this.$refs.recipeText.value;
      this.recipeCookTime = this.$refs.recipeCookTime.options[this.$refs.recipeCookTime.selectedIndex].text;
      this.recipeVegan = this.$refs.recipeVegan.checked;
      this.$emit("add", this.recipeName, this.recipeIngredients, this.recipeText, this.recipeCookTime, this.recipeVegan);
    },
  }
    // Конец
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