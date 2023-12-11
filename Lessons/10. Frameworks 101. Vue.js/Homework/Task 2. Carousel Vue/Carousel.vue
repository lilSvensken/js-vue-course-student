<template>
    <!--Начало-->
    <div class="carousel">
        <div class="carousel-inner" v-for="(image, index) in images" :key="index">
            <div class="carousel-item " :class="{active: indexx == index }">
                <img :src="image" class="d-block w-100">
            </div>
        </div>
        <button @click="prev" class="carousel-control-prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button @click="next" class="carousel-control-next">
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
            indexx: 0,
            isActive: 'active'
        };
    },
    // Начало
    methods: {
        next() {
            if (this.indexx < this.images.length - 1) {
                this.indexx++;

            } else {
                this.indexx = 0;
            }
        },
        prev() {
            if (this.indexx > 0) {
                this.indexx--;
            } else {
                this.indexx = this.images.length - 1;
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