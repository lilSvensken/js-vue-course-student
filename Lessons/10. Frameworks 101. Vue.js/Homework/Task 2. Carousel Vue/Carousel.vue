<template>

  <div class="carousel">
  <div class="carousel-inner">
    <div
        v-for="(image, index) in images"
        :key="index"
        :class="{ 'carousel-item': true, active: index === 0 }"
    >
      <img class="d-block w-100" :src="image" />
    </div>
  </div>
  <button class="carousel-control-prev" @click="prevImage">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" @click="nextImage">
    <span class="carousel-control-next-icon"></span>
  </button>
  </div>

</template>

<script>
export default {
    name: 'Carousel',
    data() {
        // Массив картинок уже получен
        const images = this.$root.data;
        return {
            images,
        };
    },
    // Начало
  methods: {
    prevImage() {
      this.images.unshift(this.images.pop());
    },
    nextImage() {
      this.images.push(this.images.shift());
    },
  },
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