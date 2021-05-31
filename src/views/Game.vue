<template>
  <div class="game">
    <Nav :currentStep="currentStep" />
    <CardDeck v-on:changeStep="changeStep"/>
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
  },
  data: function () {
    return {
      currentStep: '',
    }
  },
  methods: {
    changeStep (step){
      this.currentStep = step;
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
