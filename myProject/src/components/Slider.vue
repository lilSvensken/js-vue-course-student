<template>
    <div
        class="container"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"
        :style="{ transform: `translateX(${currentSlide * -600}px)`}"
    >
    <div
        v-for="item in sliderList"
        class="slider"
        :key="item"
    >
        Слайд: {{ item }}
    </div>
    </div>
</template>

<script>
const slider = ['1', '2', '3', '4', '5', '6', '7']
export default {
  name: 'Slider',
  data () {
    return {
      sliderList: slider,
      xPos: undefined,
      currentSlide: 0
    }
  },
  methods: {
    onMouseDown (event) {
      this.xPos = event.x
    },
    onMouseUp (event) {
      const newX = event.x

      if ((this.xPos - newX) > 40 || (this.xPos - newX) < -40) {
        if (newX < this.xPos && this.currentSlide < this.sliderList.length - 1) {
          // вправо
          this.currentSlide++
        } else {
          // влево
          this.currentSlide--
        }
      }

      this.xPos = undefined
    }
  }
}
</script>

<style>
.slider {
    width:600px;
    height: 200px;
    background-color: rgb(193, 193, 193);
    color: black;
    font-size: 20px;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.container{
    display: flex;
    gap: 20px;
    transition: all 250ms;
}
</style>
