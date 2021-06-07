<template>
  <div class="overlay-dialog">
    <div class="dialog">
      <p>{{ dialogBox[getCurrentStep(currentStep)].text_dialog }}</p>
      <button>{{ dialogBox[getCurrentStep(currentStep)].btn_step }}</button>
      <button v-on:click="()=>{$emit('hideDialogBox')}">{{ dialogBox[getCurrentStep(currentStep)].btn_dialog }}</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DialogBox',
    props: ['dialogBox','currentStep'],

    data: function () {
    return {

    }
  },
  methods: {
    getCurrentStep(text) {
      if (text=='Dialoguer'){
        return 0;
      }
      else if (text=='Découvrir'){
        return 1;
      }
      else if (text=='Définir'){
        return 2;
      }
      else if (text=='Développer'){
        return 3;
      }
      else if (text=='Délivrer'){
        return 4;
      }
      else if (text=='Diffuser'){
        return 5;
      }
      else if (text=='Débriefer'){
        return 6;
      }
      else if (text=='Clore'){
        return 7;
      }
    }
  }
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
