<template>
  <div class="carousel">
    <div class="carousel-inner" v-for="(image, index) in images">
      <div class="carousel-item" :class="{active : isActive(index)}" >
        <img :src="image" class="d-block w-100">
      </div>
    </div>
    <button class="carousel-control-prev" @click="previous()">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" @click="next()">
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
        let activeImageIndex = 0;
        return {
            images,
          activeImageIndex,
        };
    },
    // Начало
  methods: {
      next() {
        if (this.activeImageIndex === this.images.length-1){
          this.activeImageIndex = 0;
        } else {
          this.activeImageIndex = this.activeImageIndex+1;
        }
      },
    previous(){
      if (this.activeImageIndex === 0){
        this.activeImageIndex = this.images.length-1;
      } else {
        this.activeImageIndex = this.activeImageIndex-1;
      }
    },
    isActive(index) {
        return (index === this.activeImageIndex)
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