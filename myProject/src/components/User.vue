<template>
    <div>
        <h2>Имя: {{userName}}</h2>
        <p>Возраст: {{age}}</p>

        <button @click="removeItem">X</button>
    </div>
    <hr>
    <br>
</template>

<script>

export default {
  name: 'User',
  emits: ['remove'],
  // props: ['userName', 'age'],
  // props: {
  //     userName: String,
  //     age: Number
  // },
  props: {
    userName: {
      type: String,
      required: false
    },
    age: {
      type: Number,
      required: true,
      validator: (value) => {
        return value > 20
      },
      education: {
        type: Boolean,
        default: true
      }
    }
  },
  created () {
    console.log(this.userName)
  },
  methods: {
    removeItem () {
      this.$emit('remove')
    }
  }
}
</script>
