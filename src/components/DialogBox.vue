<template>
  <div class="overlay-dialog">
    <div class="dialog">
      <p>{{ memos[dialogId].text_dialog }}</p>
      <img  class="trophe" src="@/assets/var_icons/trophe.gif" alt="">
      <div class="button-container">
        <button>{{ memos[dialogId].btn_step }}</button>
        <button v-on:click="()=>{$emit('hideDialogBox')}">{{ memos[dialogId].btn_dialog }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueConfetti from 'vue-confetti'
 
  Vue.use(VueConfetti)

  export default {
    name: 'DialogBox',
    props: ['memos','dialogId'],
    mounted (){
      this.start();
      console.log('start');
    },
    methods: {
      start() {
        this.$confetti.start({
          particles: [
            {
              type: 'rect',
              size: 8,
            },
          ],
          particlesPerFrame: 2,
          defaultDropRate: 15,
          windSpeedMax: 2,
        });
      window.setTimeout(() => {this.stop();window.setTimeout(()=>{const conf = document.getElementById("confetti-canvas");conf.remove();},4000)},1500)
      },
      stop() {
        this.$confetti.stop();
      }
    }
  }
</script>


<style scoped>
@keyframes overlay {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
}

.overlay-dialog {
  position: absolute;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: overlay 0.5s ease-out;
}

.dialog {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color:#E0EEFF;
  height: 545px;
  width: 320px;
}

p {
  margin: 0;
  font-size: 24px;
  width: 290px;
  color: #4D4D4D;
  letter-spacing: 0;
  text-align: center;
}

@keyframes vibrate-fast {
  0%{
    -webkit-transform: translate(0);
    transform: translate(0);
  }
  10%{
    -webkit-transform: translate(-2px,-2px);
    transform: translate(-2px,-2px);
  }
  20%{
    -webkit-transform: translate(2px,-2px);
    transform: translate(2px,-2px);
  }
  30%{
    -webkit-transform: translate(-2px,2px);
    transform: translate(-2px,2px);
  }
  40%{
    -webkit-transform: translate(2px,2px);
    transform: translate(2px,2px);
  }
  50%{
    -webkit-transform: translate(-2px,-2px);
    transform: translate(-2px,-2px);
  }
  60%{
    -webkit-transform: translate(2px,-2px);
    transform: translate(2px,-2px);
  }
  70%{
    -webkit-transform: translate(-2px,2px);
    transform: translate(-2px,2px);
  }
  80%{
    -webkit-transform: translate(-2px,-2px);
    transform: translate(-2px,-2px);
  }
  90%{
    -webkit-transform: translate(2px,-2px);
    transform: translate(2px,-2px);
  }
  100%{
    -webkit-transform: translate(0);
    transform: translate(0);
  }
}

.trophe {
  width: 60%;
  height: auto;
  image-rendering: pixelated;
  animation: vibrate-fast 1s ease-out 2 normal forwards;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

button {
  outline: none;
  border: none;
  padding: 10px;
  width: 120px;
  height: 80px;
  font-size: 20px;
  background: #FFFFFF;
  box-shadow: 3px 3px 0 0 rgba(0,0,0,0.50);
  display: inline-block;
  word-wrap: break-word;
  transition: all 0.2s;
}

@media (hover: hover) and (pointer: fine) {
  button:hover, button:active {
  background: #FFFFFF;
  box-shadow: none;
  transform: scale(1.05);
  transform: translate(1px,1px);
  }
}

</style>
