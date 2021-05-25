<template>
  <div class="content">
    <!-- <div v-for="card in cards" :key="card.id">
      <CardUnique v-bind:card="card" v-on:displayCard="displayCard"/>
    </div> -->
    <!-- <CardUnique v-bind:card="cards.filter(card => card.id = activeID)[0]" v-on:displayCard="displayCard"/> -->
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
      // cards: require(`../data/${this.subject}.json`),
      cards: require(`../data/graphisme.csv`),
      activeID: 0,
    }
  },
  methods: {
    displayCard (id){
      var state = this
      state.activeID = id
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
