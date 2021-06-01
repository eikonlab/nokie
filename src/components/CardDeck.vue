<template>
  <div class="content" :style="{ 'background-image': 'url(' + require('@/assets/images/'+ cards[activeID].bckn_desktop) + ')' }">
    <CardUnique v-bind:card="cards[activeID]" v-on:displayCard="displayCard"/>
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
      cards: require(`../data/graphisme.csv`),
      activeID: 0,
      currentStep: 0,
    }
  },
  methods: {
    displayCard (id){
      
      var state = this
      state.activeID = id;

      var step = this.cards[id].step;
      this.$emit('changeStep', step);
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
}
</style>
