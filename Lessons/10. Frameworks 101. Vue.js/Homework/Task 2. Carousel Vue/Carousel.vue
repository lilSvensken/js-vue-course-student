<template>
    <!--Начало-->
    <div class="carousel">
        <div v-for="(image, index) in images"
             :key="index"
            class="carousel-inner">

            <div class="carousel-item " :class="{active: num == index}">
                <img :src="image"
                     class="d-block w-100">
            </div>

        </div>
        <button class="carousel-control-prev" @click="showPrev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" @click="showNext">
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
            num : 0
        };
    },
    // Начало
    methods: {
        showPrev() {
            if (this.num > 0) {
                this.num--;
            } else {
                this.num = this.images.length - 1;
            }
        },
        showNext() {
            if (this.num < this.images.length - 1) {
                this.num++;
            } else {
                this.num = 0;
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