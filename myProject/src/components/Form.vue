<template>
    {{ form.film }}
    <form @submit="onSubmit">
        <input type="text" v-model="form.film">

        <input type="radio"  value="Yes" v-model="form.isCheck">
        <input type="radio"  value="No" v-model="form.isCheck">
        <br>

        <input type="checkbox" value="1" v-model="form.type">
        <input type="checkbox" value="2" v-model="form.type">
        <input type="checkbox" value="3" v-model="form.type">
        <br>

        <button type="submit">отправить</button>
    </form>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      form: {
        film: '',
        isCheck: 'No',
        type: ['2', '3']
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit:', this.form)
    }
  }
}
</script>
