<template>
  <header>
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <ul class="nav">
          <navbar-link title="Главная" href="#"></navbar-link>
          <navbar-link title="Турниры" href="#"></navbar-link>
          <navbar-dropdown-menu
              v-for="dMenu in dropdownMenus"
              :title="dMenu.menuTitle"
              :links="dMenu.dropLinks"
              :key="dMenu.menuTitle"
          ></navbar-dropdown-menu>
        </ul>
        <ul class="nav">
          <the-search></the-search>
          <the-dropdown-user-profile v-if="user"></the-dropdown-user-profile>
          <the-login-button v-else></the-login-button>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import TheLoginButton from "@/components/headerComponents/TheLoginButton";
import TheDropdownUserProfile from "@/components/headerComponents/TheDropdownUserProfile";
import TheSearch from "@/components/headerComponents/TheSearch";
import NavbarLink from "@/components/headerComponents/NavbarLink";
import NavbarDropdownMenu from "@/components/headerComponents/NavbarDropdownMenu";
export default {
  name: "TheHeader",
  data(){
    return {
      user: '',
      menus: [],
      dropdownMenus: [
        {menuTitle: "Кланы",
          dropLinks: [
            {title: "Активация резервов",
              href: '#'},
          ]},
        {menuTitle: "Роты", dropLinks: [
            {title: "Вступить в роту",
              href: '#'},
            {title: "Рейтинг рот",
              href: '#'},
            {title: "Арендовать роту",
              href: '#'}
          ]},
        {menuTitle: "Игроки", dropLinks: [
            {title: "Мой профиль",
              href: '#'}
          ]}
      ]
    }
  },
  components:{
    NavbarLink,
    NavbarDropdownMenu,
    TheSearch,
    TheLoginButton,
    TheDropdownUserProfile
  }
}
</script>

<style scoped>

</style>