<template>
  <div>
    <li>home page</li>
    <li>{{ storeCount }}</li>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    storeCount() {
      return this.$store.state.count
    },
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
  },
}
</script>
