<template>
  <div>
      <nav>
        <h2>step: {{ currentStep }}</h2>
        <div class="links">
          <router-link to="/">Home</router-link> |
          <router-link to="/game">Game</router-link>
        </div>
        <img src="@/assets/var_icons/nokie_menu_notif.svg" alt="">
      </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Nav.vue',
  props: ['currentStep'],
}
</script>

<style>
nav {
  align-self: flex-start;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 10px;
  background-color: #FFFFFF;
}

/* Text styling */

h2, nav {
  font-size: 24px;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}

nav a, nav a:visited {
  color: #4D4D4D;
}

nav a.router-link-exact-active {
  color: #1DD0FB;
}
</style>
