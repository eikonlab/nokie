<template>
  <div id="app">
      <nav>
        <h2>step: <!-- {{ card.step }}--></h2>
        <div class="links">
          <router-link to="/">Home</router-link> |
          <router-link to="/game">Game</router-link>
        </div>
        <img src="@/assets/var_icons/nokie_menu_notif.svg" alt="">
      </nav>
    <router-view/>
  </div>
</template>

<style>

body, html {
  margin: 0;
  padding: 0;
  background-color: #E4F5FF;
  font-size: 1.3rem;
  height: 100%;
  -webkit-font-smoothing: antialiased;
}

#app {
  height: calc(100% - 70px);
}

* {
  font-family: 'VT323', monospace;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
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
