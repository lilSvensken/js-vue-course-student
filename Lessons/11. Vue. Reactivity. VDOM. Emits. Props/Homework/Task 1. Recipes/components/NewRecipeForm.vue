<template>
    <div class="recipe-form">
        <!--Начало-->
        <div class="recipe-form">
            <h3>Создать новый рецепт</h3>
            <div class="recipe-form__block">
                <label class="form-label">
                    Название нового рецепта
                </label>
                <input class="form-control recipe-form__name" v-model="recipeName">
            </div>
            <div class="recipe-form__block">
                <label class="form-label">
                    Ингредиенты
                </label>
                <textarea class="form-control recipe-form__ingredients"
                          v-model="recipeIngredients">
                </textarea>
            </div>
            <div class="recipe-form__block">
                <label class="form-label">
                    Последовательность действий
                </label>
                <textarea class="form-control recipe-form__text"
                          v-model="recipeAction">
                </textarea>
            </div>
            <div class="recipe-form__block">
                <label class="form-label">
                    Время приготовления
                </label>
                <select class="form-select recipe-form__cook-time" v-model="selectedOption">
                    <option v-for="option in timeOptions"
                            :key="option.value"
                            :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>
            <div class="recipe-form__block">
                <input type="checkbox" class="form-check-input" v-model="isVegan">
                <label class="form-check-label">
                    Вегетарианское блюдо
                </label>
            </div>
            <div class="recipe-form__block">
                <button class="btn btn-dark recipe-form__add-button"
                        @click="addRecipe">
                    Добавить рецепт
                </button>
            </div>
        </div>
        <!--Конец-->
    </div>
</template>

<script>
import RecipesContainer from "./RecipesContainer.vue";

export default {
    name: 'NewRecipeForm',
    data() {
        return {
            // Начало
            selectedOption: 1,
            recipeName: '',
            recipeIngredients: '',
            recipeAction: '',
            isVegan: false,
            idRecept: 0,

            // Конец
            // Опции для селекта "Время приготовления"
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
    // Начало
    emits: ['add-recipe'],
    props: {
        newRecipe: {
            type: Array,
            required: true
        }
    },
    components: {
        RecipesContainer
    },
    methods: {
        addRecipe() {
            this.idRecept++;
            this.newRecipe.push({
                id: this.idRecept,
                recipeName: this.recipeName,
                recipeIngredients: this.recipeIngredients,
                recipeAction: this.recipeAction,
                selectedTime: this.selectedTime,
                isVegan: this.isVegan
            })
            this.$emit('add-recipe', this.newRecipe);

            this.selectedOption = 1;
            this.recipeName = '';
            this.recipeIngredients = '';
            this.recipeAction = '';
            this.isVegan = false;
        }
    },
    computed: {
        selectedTime() {
            if (this.selectedOption) {
                const selected = this.timeOptions.find(option => option.value === this.selectedOption);
                return selected.text;
            }
            return null;
        }
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