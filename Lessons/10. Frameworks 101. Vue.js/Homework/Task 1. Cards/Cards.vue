<template>
  <ul>
    <div class="card-container">
      <li v-for="(item) in cards" :key="item.id">
        <div class="card">
          <img :src="item.src" class="card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">{{ item.head }}</h5>
            <h4 class="card-title">{{ item.price }}</h4>
            <p class="card-text">{{ item.description }}</p>
            <div class="card__buttons">
              <button class="btn btn-primary button-plus" @click="addButton(item)">
                +
              </button>
              <button class="btn btn-primary button-minus" @click="subButton(item)">
                -
              </button>
            </div>
            <div> {{item.number}} шт.</div>
          </div>
          <div v-if="item.number > item.max" class ="card__alert alert alert-danger">
            Данного товара доступно только {{item.max}} шт.
          </div>
        </div>
      </li>
    </div>
  </ul>
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
    addButton(item){
      console.log(item.number, item.max);
      if(item.number < item.max){
        item.number++;
      }
    },
    subButton(item){
      if(item.number > 0)
        item.number--;
    }
  }
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