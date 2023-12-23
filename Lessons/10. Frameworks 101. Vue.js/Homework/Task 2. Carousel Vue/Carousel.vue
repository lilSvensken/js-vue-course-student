<template>
    <!--Начало-->
    <div class="carousel">
        <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" class="carousel-item" :class="{ active: index === currentIndex }">
                <img class="d-block w-100" :src="image" alt="Carousel Image" />
            </div>
        </div>
        <button @click="prevSlide" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
        </button>
        <button @click="nextSlide" class="carousel-control-next">
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
    // Начало
    methods: {
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
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