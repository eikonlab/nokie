<template>
  <div class="content" :style="{ 'background-image': 'url(' + require('@/assets/images/'+ cards[activeID].bckn_desktop) + ')' }">
    <CardUnique v-bind:card="cards[activeID]" v-on:displayCard="displayCard" v-on:showDialogBox="showDialogBox"/>
    <button class="storage" v-on:click="clearStorage()"></button>
  </div>
</template>


<script>
import CardUnique from '@/components/CardUnique.vue'

export default {
  name: 'CardDeck',
  components: {
    CardUnique
  },
  data: function () {
    return {
      cards: require(`../data/graphisme_cards.csv`),
      activeID: 0,
      currentStep: 0,
    }
  },
  mounted (){
    this.getStorage();
  },
  methods: {
    getStorage () {
      let localValue = localStorage.getItem('CardID');
        if (localValue) {
          var state = this;
          state.activeID = localValue;
          console.log("storage", localValue);
        }
    },
    displayCard (id){
      localStorage.setItem('CardID', id)
      
      var state = this
      state.activeID = id;

      var step = this.cards[id].step;
      this.$emit('changeStep', step);
    },
    showDialogBox (dialogId) {
      this.$emit('showDialogBox', dialogId);
    },
    clearStorage () {
      localStorage.removeItem('CardID');
      alert('cache vidé')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.6s;
}

.storage {
  position: absolute;
  top: 0;
  height: 20px;
}
</style>
