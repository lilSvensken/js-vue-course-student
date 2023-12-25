<template>
  <CardBlock>
    <!-- Начало -->
    <template v-slot:image>
      <img :src="director.image" alt="Director Image" />
    </template>

    <template v-slot:info>
      <div class="director__info-name">{{ director.name }}</div>
      <div>
        <span class="director__title">Возраст:</span>
        {{ director.age }}
      </div>
      <div>
        <span class="director__title">Место рождения:</span>
        {{ director.birthPlace }}
      </div>
      <div>
        <span class="director__title">Фильмы:</span>
        {{ director.movies }}
      </div>
    </template>
    <!-- Конец -->
  </CardBlock>
</template>

<script>
import CardBlock from "./CardBlock.vue";

export default {
  name: "DirectorCard",
  components: { CardBlock },
  props: {
    director: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.director__info-name {
  font-size: 18px;
  font-weight: bold;
}

.director__title {
  font-size: 16px;
  font-weight: bold;
}
</style>
