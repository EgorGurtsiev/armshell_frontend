<template>
  <the-header></the-header>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
export default {
  name: 'App',
  components: {
    TheFooter,
    TheHeader
  }
}
</script>

<style>
</style>
