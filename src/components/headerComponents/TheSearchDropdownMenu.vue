<template>
  <ul v-if="search_result" class="dropdown-menu dropdown-menu-left dropdown-menu-light" id="searchDatalistOptions">
    <li class="dropdown-item-text"><b class="text-sm-start">Игроки:</b></li>
    <li v-for="player of search_result.players" :key="player.nickname">
      <a class="dropdown-item" :href="'/players/' + player.nickname">{{player.nickname}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheSearchDropdownMenu",
  props: {
    search_result: Object
  }
}
</script>

<style scoped>
</style>