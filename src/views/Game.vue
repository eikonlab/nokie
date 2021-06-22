<template>
  <div class="game">
    <Nav :currentStep="currentStep" />
    <CardDeck v-on:changeStep="changeStep" v-on:showDialogBox="showDialogBox" v-on:playEndSound="playEndSound"/>
    <div v-if="dialogId && !hasDialogIdAlreadyBeenShown()" class="dialogContainer">
      <DialogBox :memos="memos" v-on:hideDialogBox="hideDialogBox" :dialogId="dialogId"/>
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
      memos: require(`../data/graphisme_memos.csv`),
      dialogId: false,
      dialogIdShown: [],
    }
  },
  methods: {
    changeStep (step){
      this.currentStep = step;
    },
    showDialogBox(dialogId) {
      this.dialogId = dialogId;
    },
    playEndSound() {
      // console.log('play end sound!')
      //this.$emit('playEndSound')
    },
    hideDialogBox() {
      this.dialogIdShown.push(this.dialogId);
      this.dialogId = false;
    },
    hasDialogIdAlreadyBeenShown() {
      let hasDialogBeenShown = false;
      this.dialogIdShown.forEach((element) => {
        if (this.dialogId == element) {
          hasDialogBeenShown = true;
        }
      });
      return hasDialogBeenShown
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
