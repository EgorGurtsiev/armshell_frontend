<template>
  <li class="nav-item dropdown">
    <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Роты</a>
    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
      <li v-for="dropLink in dropLinks" :key="dropLink.title">
        <a class="dropdown-item" href="#">{{dropLink.title}}</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "NavbarDropdownMenu",
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