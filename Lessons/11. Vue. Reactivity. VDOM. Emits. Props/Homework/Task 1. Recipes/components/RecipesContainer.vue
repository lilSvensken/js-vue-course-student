<template>
    <!--Начало-->
    <div class="recipe-container">
        <h3>
            Мои рецепты
        </h3>
        <div class="recipe-container__no-recipes" v-if="recipe.length === 0">
            Нет рецептов
        </div>
        <div class="card" v-for="recipe in recipe" :key="recipe.id">
            <div class="card-body">
                <div class="card-body__header">
                    <h4>
                        {{ recipe.recipeName }}
                    </h4>
                    <VeganIcon/> {{ recipe.isVegan ? 'да' : 'нет'}}
                    <TimeIcon/> {{ recipe.selectedTime }} 
                </div>
                Ингредиенты:
                {{ recipe.recipeIngredients }}
                <button class="btn btn-light card-body__remove-button"
                    @click="$emit('remove-recipe', recipe.id)"
                > 
                    Удалить
                </button>
            </div>
        </div>
    </div>
    <!--Конец-->
</template>

<script>
// Начало
import VeganIcon from '../icons/VeganIcon.vue';
import TimeIcon from '../icons/TimeIcon.vue';
export default {
    name: 'RecipesContainer',
    emits: ['remove-recipe'],
    props: {
        recipe: {
            type: Array,
        }
    },
    data() {
        return {
            show: false
        }
    },
    components: {
        VeganIcon,
        TimeIcon,      
    },
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