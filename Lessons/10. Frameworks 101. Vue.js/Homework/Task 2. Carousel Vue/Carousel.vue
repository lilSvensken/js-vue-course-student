<template>
  <!--Начало-->
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'carousel-item': true, 'active': index === currentIndex }"
      >
        <img :src="image" class="d-block w-100" alt="Carousel Image" />
      </div>
    </div>
    <button class="carousel-control-prev" @click="prevSlide">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="nextSlide">
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
      currentIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
  },
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

.carousel img {
  border-radius: 10px;
}
</style>
