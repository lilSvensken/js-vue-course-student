<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(image, index) in images"
          :key="index"
          :class="{ 'carousel-item': true, 'active': index === currentIndex }"
      >
        <img class="d-block w-100" :src="image"/>
      </div>
    </div>
    <button class="carousel-control-prev" @click="prevSlide">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="nextSlide">
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
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
    },
    nextSlide() {
      this.currentIndex = this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
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

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 30px;
  height: 30px;
  background-color: #000;
  border-radius: 50%;
  display: inline-block;
}

</style>