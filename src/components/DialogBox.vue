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
      else if (text=='Dialoguer2'){
        return 1;
      }
      else if (text=='Dialoguer3'){
        return 2;
      }
      else if (text=='Dialoguer3'){
        return 2;
      }
      else if (text=='Dialoguer3'){
        return 2;
      }
    }
  }
}

</script>

<style scoped>
.overlay-dialog {
  position: absolute;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog {
  background-color: green;
  height: 40%;
  width: 20%;
}

</style>
