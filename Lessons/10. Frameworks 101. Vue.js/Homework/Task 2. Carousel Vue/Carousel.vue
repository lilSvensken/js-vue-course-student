<template>
    <!--Начало-->
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-item' : true, 'active' : index === counter }">
        <img :src="image" class="d-block w-100" alt="carousel">
      </div>
    </div>
    <button class="carousel-control-prev" @click="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
    <!--Конец-->
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        // Массив картинок уже получен
        const images = this.$root.data;
        return {
            images,
            counter: 0,
        };
    },
    // Начало
  methods: {
    next() {
      if (this.counter < this.images.length - 1)  {
        this.counter++;
      } else {
        this.counter = 0
      }
    },
    prev() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counter = this.images.length - 1;
      }
    }
  }
    // Конец
};
</script>

<style>
.carousel {
    background: #f6f6f6;
    display: block;
    padding: 30px;
    margin: 40px;
    font-family: Verdana, Tahoma, sans-serif;
    border-radius: 10px;
    align-items: center;
    width: 1000px;
}

.carousel-item {
    min-height: 325px;
}

.carousel-item.active {
    display: flex;
}
</style>