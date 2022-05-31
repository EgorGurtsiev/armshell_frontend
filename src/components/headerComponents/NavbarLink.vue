<template>
  <li><a :href="href" class="nav-item nav-link px-2">{{ title }}</a></li>
</template>

<script>
export default {
  props: {
    title: String,
    href: String
  },
  name: "NavbarLink"
}
</script>

<style scoped>

</style>