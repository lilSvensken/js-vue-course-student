<template>
    <!--Начало-->
    <div class="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-item' : true, 'active' : index === 0}">
          <img :src="image" class="d-block w-100" />
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
            currentSlide: 0
        };
    },
    // Начало
    methods: {
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length();
      },
      prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.images.length - 1 : this.currentSlide - 1;
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