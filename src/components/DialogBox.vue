<template>
  <div class="overlay-dialog">
    <div class="dialog">
      <p>{{ memos[dialogId].text_dialog }}</p>
      <button>{{ memos[dialogId].btn_step }}</button>
      <button v-on:click="()=>{$emit('hideDialogBox')}">{{ memos[dialogId].btn_dialog }}</button>
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
      top: -100%;
    }
    100% {
      opacity: 1;
      top: 0;
    }
}

.overlay-dialog {
  position: absolute;
  top: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: overlay 0.7s ease-out;
}

.dialog {
  background-color: green;
  height: 40%;
  width: 20%;
}

</style>
