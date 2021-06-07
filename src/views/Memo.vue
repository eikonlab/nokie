<template>
  <div class="game">
    <Nav />
    <div v-for="(memo, index) in memos" v-bind:key="index">
      {{ memo.btn_step }} {{ memo.memo_text }}
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Game',
  components: {
    Nav,
  },
  data: function () {
    return {
      memos: require(`../data/graphisme_memos.csv`),
    }
  },
}
</script>

<style scoped>

</style>
