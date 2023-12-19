<template>
    <!--Начало-->
    <div class="card-container">
    <div v-for="card in cards" :key="card.id" class="card">
      <img :src="card.src" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ card.head }}</h5>
        <h4 class="card-title">{{ card.price }}</h4>
        <p class="card-text">{{ card.description }}</p>
        <div class="card__buttons">
          <button @click="decrement(card)" class="btn btn-primary button-minus">-</button>
          <button @click="increment(card)" class="btn btn-primary button-plus">+</button>
          <div>{{ card.number }} шт.</div>
        </div>
        <div v-if="card.number > card.max" class="card__alert alert alert-danger">
          Данного товара доступно только {{ card.max }} шт.
        </div>
      </div>
    </div>
  </div>
    <!--Конец-->
</template>

<script>
export default {
    name: 'Cards',
    data() {
        // Массив данных для карточек товаров уже получен
        const cards = this.$root.data;
        return {
            cards,
        };
    },
    // Начало
    methods: {
        increment(card) {
            if (card.number <= card.max){
                card.number++;
            }
        },
        decrement(card){
            if (card.number > 0) {
                card.number--;
            }
        }


    }
    // Конец
};
</script>

<style>
.card-container {
    display: flex;
    margin: 40px;
    padding: 20px;
    background: aliceblue;
    width: 1010px;
}

.card {
    width: 300px;
    margin-right: 15px;
}

.card img {
    margin-top: 15px;
}

.card__buttons {
    display: flex;
    align-items: center;
}

.card__buttons button {
    width: 50px;
    margin-right: 20px;
}

.card__buttons div {
    font-size: 20px;
}

.card__alert {
    margin-top: 10px;
}
</style>