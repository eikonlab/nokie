<template>
  <div class="game">
    <Nav currentStep="1" />
    <CardDeck/>
  </div>
</template>

<script>
import CardDeck from '@/components/CardDeck.vue';
import Nav from '@/components/Nav.vue';

export default {
  name: 'Game',
  components: {
    CardDeck,
    Nav
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
