<template>
  <div class="game">
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
.game{
  height: 100%;
  width: 100%;
}
</style>
