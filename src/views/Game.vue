<template>
  <div class="game">
    <h1>Game:</h1>
    <CardDeck/>
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
    color: blue;
  }
</style>
