<template>
    <!--Начало-->
  <div class="carousel">
    <div class="carousel-inner" v-for="(image, index) in images" :key="index">
      <div :class="{'carousel-item': true, active: current === index}">
        <img :src="image" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" @click="prevImage">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="nextImage">
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
            current: 0
        };
    },
    // Начало
    methods: {
      nextImage() {
        if (this.current < this.images.length - 1) this.current++;
        else this.current = 0
      },

      prevImage() {
        if (this.current > 0) this.current--;
        else this.current = this.images.length - 1;
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