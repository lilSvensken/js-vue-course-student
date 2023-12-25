<template>
    <div class="recipes">
        <!--Начало-->
      <input type="text" v-model="newRecipe.name" placeholder="Название рецепта" />
      <textarea v-model="newRecipe.ingredients" placeholder="Ингредиенты"></textarea>
      <textarea v-model="newRecipe.steps" placeholder="Последовательность действий"></textarea>
      <select v-model="newRecipe.time">
        <option value="5">5 минут</option>
      </select>
      <label>
        <input type="checkbox" v-model="newRecipe.isVegetarian" /> Вегетарианское блюдо
      </label>
      <button @click="addRecipe">Добавить рецепт</button>


        <!--Конец-->
    </div>
</template>

<script>
export default {
    name: 'Recipes',
    // Начало
  data() {
    return {
      newRecipe: {
        name: '',
        ingredients: '',
        steps: '',
        time: 5,
        isVegetarian: false
      },
      recipes: []
    };
  },
  methods: {
    addRecipe() {
      this.recipes.push(this.newRecipe);
      this.resetForm();
    },
    resetForm() {
      this.newRecipe = { name: '', ingredients: '', steps: '', time: 5, isVegetarian: false };
    },
    removeRecipe(index) {
      this.recipes.splice(index, 1);
    }
  }

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