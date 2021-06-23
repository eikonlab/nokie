<template>
  <div class="app">
    <audio ref="soundtrack" preload="auto" src="@/assets/sound/song.mp3" muted loop></audio>
    <audio ref="endSong" preload="auto" src="@/assets/sound/song.mp3" muted loop></audio>
    <router-view v-bind:isMuted="isMuted" v-on:playEndSound="playEndSound()" v-on:toggleSound="toggleSound()"/>
  </div>
</template>

<script>
export default{
  name: 'App',
  components: {
  },
  data: function () {
    return {
      isMuted : false,
    }
  },
  mounted (){
    this.playSoundTrack();
  },
  methods: {
    playEndSound(){
    // console.log('play end sound from app!')
    },
    playSoundTrack(){
      // let audio = this.$refs.soundtrack;
      // audio.play(); 
    },
    toggleSound(){
      this.isMuted = !this.isMuted;
    }
  }
}

</script>

<style>

@keyframes bckn {
  0% {
    background: #FFDB70;
  }
  50% {
    background: #1CD0FF;
  }
  100% {
    background: #FFDB70;
  }
}

body, html {
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  animation: bckn 6s ease-in-out infinite;
  cursor: url('/cursor.png'), auto;
}

a:hover {
  cursor: url('/hand.png'), auto;
}

.app {
  height: 100%;
  width: 100%;
}

* {
  font-family: 'VT323', monospace;
}

#confetti-canvas {
  display: block;
  pointer-events: none;
  top: 0px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
  user-select: none;
  pointer-events: none;
}
</style>
