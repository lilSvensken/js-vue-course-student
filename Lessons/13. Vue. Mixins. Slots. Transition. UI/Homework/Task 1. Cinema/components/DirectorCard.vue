<template>
  <CardBlock>
    <template v-slot:image>
      <img :src="director.image" alt="Director Image">
    </template>
    <template v-slot:info>
      <div class="director__info-name">
        {{ director.name }}
      </div>
      <div>
        <span class="director__title">
          Возраст:
        </span>
        {{ director.age }}
      </div>
      <div>
        <span class="director__title">
          Место рождения:
        </span>
        {{ director.birthplace }}
      </div>
      <div>
        <span class="director__title">
          Фильмы:
        </span>
        {{ director.movies }}
      </div>
    </template>
    </CardBlock>
</template>

<script>
import CardBlock from './CardBlock.vue';

export default {
  name: 'DirectorCard',
  components: {CardBlock},
  props: {
    director: Object,
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