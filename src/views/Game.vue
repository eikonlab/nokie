<template>
  <div class="game">
    <Nav :currentStep="currentStep" />
    <CardDeck v-on:changeStep="changeStep" v-on:showDialogBox="showDialogBox"/>
    <div v-if="isDialog" class="dialogContainer">
      <DialogBox :dialogBox="dialogBox" v-on:hideDialogBox="hideDialogBox" :currentStep="currentStep"/>
    </div>
  </div>
</template>

<script>
import CardDeck from '@/components/CardDeck.vue';
import Nav from '@/components/Nav.vue';
import DialogBox from '@/components/DialogBox.vue';

export default {
  name: 'Game',
  components: {
    CardDeck,
    Nav,
    DialogBox,
  },
  data: function () {
    return {
      currentStep: '',
      dialogBox: require(`../data/dialogBox.csv`),
      isDialog: false,
    }
  },
  methods: {
    changeStep (step){
      this.currentStep = step;
    },
    showDialogBox() {
      this.isDialog = true;
    },
    hideDialogBox() {
      this.isDialog = false;
    }
  }
}
</script>

<style scoped>
.game {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
