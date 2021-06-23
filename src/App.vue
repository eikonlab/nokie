<template>
  <div class="app">
    <router-view/>
  </div>
</template>

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
