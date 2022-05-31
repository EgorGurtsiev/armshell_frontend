<template>
  <li class="nav-item me-lg-3">
    <div class="dropdown">
      <input
          id="search"
          v-model="query"
          autocomplete="off"
          class="form-control dropdown-toggle"
          data-bs-auto-close="outside"
          data-bs-toggle="dropdown"
          placeholder="Поиск..."
          @input="search_player"
      >
      <the-search-dropdown-menu :search_result="this.search_result"></the-search-dropdown-menu>
    </div>
  </li>
</template>

<script>
import debounce from "lodash.debounce";
import axios from "axios";
import TheSearchDropdownMenu from "@/components/headerComponents/TheSearchDropdownMenu";

export default {
  name: "TheSearch",
  data() {
    return {
      query: '',
      search_result: {},
      dropdown_menu_visibility: false
    }
  },
  components: {
    TheSearchDropdownMenu
  },
  methods:{
    search_player: debounce(function (){
      if (this.query.length > 2) {
        axios
            .get('http://localhost:8000/players/search/?nickname=' + encodeURIComponent(this.query))
            .then(response => {
              this.search_result.players = response.data
              console.log(response)
            })
            .catch(error => console.log(error))
      }
    }, 500)
  }
}
</script>

<style scoped>

</style>