<template>
  <div class="overlay-dialog">
    <div class="dialog">
      <img src="@/assets/var_icons/nokie_menu.svg" alt="">
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
  export default {
    name: 'DialogBox',
    props: ['memos','dialogId'],
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

.trophe {
  width: 60%;
  height: auto;
  image-rendering: pixelated;
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
