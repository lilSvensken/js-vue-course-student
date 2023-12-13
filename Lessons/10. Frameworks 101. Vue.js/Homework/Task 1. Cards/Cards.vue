<template>
    <!--Начало-->
    <div class="card-container">
      <div class="card" v-for="card in cards" :key="card.id">
        <img :src="card.src" class="card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">{{ card.head }}</h5>
          <h4 class="card-title">{{ card.price }}</h4>
          <p class="card-text">{{ card.description }}</p>

          <div class="card\_\_buttons">
            <button class="btn btn-primary button-plus" @click="increaseQuantity(card.id)">+</button>
            <button class="btn btn-primary button-minus" @click="decreaseQuantity(card.id)">-</button>
            <div>{{ card.number }}</div>
          </div>

          <div class="card\_\_alert alert alert-danger" v-if="!canDecrease(card.id)">
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
    methods: {
      canDecrease(id) {
        return this.cards.find(card => card.id === id).number < this.cards.find(card => card.id === id).max;
      },
      increaseQuantity(id) {
        if (this.canDecrease(id) === true) {
          this.cards.find(card => card.id === id).number++;
        }
      },
      decreaseQuantity(id) {
        if (this.cards.find(card => card.id === id).number === 0) {
          return;
        } this.cards.find(card => card.id === id).number--;
      }
    }

  // Начало

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