<template>
  <header>
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <ul class="nav">
          <li><a href="" class="nav-item nav-link px-2">Главная</a></li>
          <li><a href="#" class="nav-link px-2 ">Турниры</a></li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Кланы</a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">

              <li><a class="dropdown-item" href="">Активация резервов</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">Роты</a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink1">
              <li><a class="dropdown-item" href="#">Моя рота</a></li>
              <li><a class="dropdown-item" href="#">Вступить в роту</a></li>
              <li><a class="dropdown-item" href="#">Рейтинг рот</a></li>
              <li><a class="dropdown-item" href="#">Арендовать роту</a></li>
              <li><a class="dropdown-item disabled" href="#">Арендовать роту</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle " id="navbarDropdownMenuPlayersLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Игроки</a>

            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuPlayersLink">
              <li><a class="dropdown-item" href="">Мой профиль</a></li>
            </ul>

          </li>
        </ul>
        <!-- Основная навигация -->
        <ul class="nav">
          <!-- Поиск -->
          <li class="nav-item me-lg-3">
            <div class="dropdown">
              <input class="form-control dropdown-toggle" id="search" type="combobox" data-bs-toggle="dropdown" data-bs-auto-close="outside" autocomplete="off" placeholder="Поиск..." oninput="search_player_deb()">
              <ul class="dropdown-menu dropdown-menu-left dropdown-menu-light" id="searchDatalistOptions">
                <li class="dropdown-item-text"><b class="text-sm-start">Игроки:</b></li>
                <span id="ls_players"></span>
              </ul>
            </div>
          </li>
          <!-- Поиск -->
          <!-- Авторизация или профиль -->
          <li class="nav-item">
            <div class="dropdown text-end">
              <a href="#" class="d-block link-light light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="" alt="mdo" width="32" height="32" class="rounded-circle">
              </a>
              <ul class="dropdown-menu dropdown-menu-end text-small" aria-labelledby="dropdownUser1">
                <li class="dropdown-item-text"></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="">Мой профиль</a></li>
                <li><a class="dropdown-item" href="#">Настройки</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="">Выйти</a></li>
              </ul>
            </div>
          </li>
          <!-- Авторизация/Профиль -->
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data(){
    return {
      menus: [],
      dropdownMenus: [
        {menuTitle: "Кланы", dropLinks: ["Активация резервов",]},
        {menuTitle: "Роты", dropLinks: ["Вступить в роту", "Рейтинг рот", "Арендовать роту"]},
        {menuTitle: "Игроки", dropLinks: ["Мой профиль"]}
      ]
    }
  },
}
</script>

<style scoped>

</style>