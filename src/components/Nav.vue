<template>
  <div>
      <nav>
        <div class="nav-container">
            <div  class="links">
              <div v-if="$route.name == 'Memo' || $route.name == 'About' ">
                <a href="javascript:history.go(-1)"><img src="@/assets/var_icons/back.svg" alt=""></a>
              </div>
              <div v-if="$route.name == 'Game' || $route.name == 'Home' ">
                <router-link to="/About"><img src="@/assets/var_icons/logo.png" alt=""></router-link>
              </div>
              <router-link to="/"><img src="@/assets/var_icons/nav_home.svg" alt=""></router-link>
              <router-link to="/Memo"><img src="@/assets/var_icons/nav_nokie.svg" alt=""></router-link>
              <div class="music-player">
                <audio ref="audio" preload="auto" src="@/assets/sound/song.mp3" muted loop></audio>
              <div @click="toggleSound(file)" class="toggle-sound paused"><img :src="require(`@/assets/var_icons/${soundIcon[playState]}`)"></div>
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
  props: ['currentStep'],
    data: () => ({
      file: "@/assets/sound/song.mp3",
      playState : 'off',
      soundIcon: {
        on: 'nav_song_on.svg',
        off: 'nav_song_off.svg'
      },
    }),
    src:['@/assets/var_icons/nav_nokie.svg','@/assets/var_icons/nav_nokie.svg'],
    currentSrc: 0,
    methods: {
    toggleSound() {
      let audio = this.$refs.audio;
      audio.volume = 0.1;
      if (audio.paused && document.querySelector(".toggle-sound").classList.contains("paused")) {
        console.log("play it")
        audio.play();
        this.playState = 'on';
        document.querySelector(".toggle-sound").classList.remove("paused");
      } else {
        console.log("pause it")
        audio.pause();
        this.playState = 'off';
        document.querySelector(".toggle-sound").classList.add("paused");
      }
    }
  }
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
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

nav {
  height: 40px;
  width: 100%;
  padding: 10px;
  background-color: #FFFFFF;
  position: fixed;
  top: 0px;
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
}

nav a.router-link-exact-active {
  color: #1DD0FB;
}
</style>
