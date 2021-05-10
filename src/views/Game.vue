<template>
  <div class="game">
    <h1>Game:</h1>
    <CardDeck subject="graphisme"/>
  </div>
</template>

<script>
import CardDeck from '@/components/CardDeck.vue'

export default {
  name: 'Game',
  components: {
    CardDeck
  }
}
</script>

<style scoped>
  h1 {
    background: red;
  }
</style>
