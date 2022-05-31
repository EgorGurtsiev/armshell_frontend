<template>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">{{ title }}</a>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
      <li v-for="link in links" :key="link.title">
        <a class="dropdown-item" :href="link.href">{{link.title}}</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavbarDropdownMenu",
  props:{
    title: String,
    links: Array,
  },
  data() {
    return {
      menuTitle: '',
      dropLinks: []
    }
  },
}
</script>

<style scoped>

</style>