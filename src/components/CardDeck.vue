<template>
  <div class="content">
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
      // To DO
      // Pass this step value to the GAME component.
      // To be displayed on the header
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
}
</style>
