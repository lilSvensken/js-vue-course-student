<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div v-for="(img, i) in images" :key="i" :class="{ 'carousel-item': true, 'active': i === index }">
        <img :src="img" class="d-block w-100" alt="Carousel Image" />
      </div>
    </div>
    <button class="carousel-control-prev" @click="before">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="next">
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
            index:0
        };
    },  methods: {
    before() {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
    },
    next() {
      this.index = (this.index + 1) % this.images.length;
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
</style>
