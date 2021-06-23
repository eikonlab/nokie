<template>
  <div>
      <nav>
        <div class="nav-container">
            <div  class="links">
              <div v-if="$route.name == 'Memo' || $route.name == 'About' ">
                <a href="javascript:history.go(-1)"><img src="@/assets/var_icons/back.svg" alt=""></a>
              </div>
              <div v-if="$route.name == 'Game' || $route.name == 'Home' ">
                <router-link to="/About"><img src="@/assets/var_icons/logo.svg" alt=""></router-link>
              </div>
              <router-link to="/"><img src="@/assets/var_icons/nav_home.svg" alt=""></router-link>
              <router-link to="/Memo"><img src="@/assets/var_icons/nav_nokie.svg" alt=""></router-link>
              <div class="music-player">
              <div @click="$emit('toggleSound')" class="toggle-sound paused"><img :src="require(`@/assets/var_icons/${soundIcon[getPlayState()]}`)"></div>
            </div>
          </div>
        </div>
      </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Nav.vue',
  props: ['currentStep', 'isMuted'],
    data: () => ({
      file: "@/assets/sound/song.mp3",
      soundIcon: {
        on: 'nav_song_on.svg',
        off: 'nav_song_off.svg'
      },
    }),
    src:['@/assets/var_icons/nav_nokie.svg','@/assets/var_icons/nav_nokie.svg'],
    currentSrc: 0,
    methods: {
      getPlayState(){
        if(this.isMuted) return 'on'
        else return 'off';
      }
  },
}
</script>

<style>
.music-player {
  width: 40px;
  display: flex;
  justify-content: center;
}

nav img {
  height: 30px;
  image-rendering: pixelated;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 315px;
}

nav {
  height: 60px;
  width: 100%;
  padding: 10px;
  background-color: #FFFFFF;
  position: fixed;
  top: 0px;
  box-sizing: border-box;
}

.nav-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.toggle-sound {
  display: flex;
  align-items: center;
}

/* Text styling */

h2, nav {
  font-size: 18px;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}

nav a, nav a:visited {
  color: #4D4D4D;
  line-height: 0;
  display: flex;
}

nav a.router-link-exact-active {
  color: #D5ffcf;
}
</style>
