<template>
  <div class="game">
    <div v-if="showMemoBox">
      <Memobox v-on:closebox="hideBox()" v-bind:memoItem="memoItem"/>
    </div>
    <Nav v-on:toggleSound="$emit('toggleSound')" v-bind:isMuted="isMuted"/>
    <div class="content-memo">
      <div v-for="(memo, index) in memos" v-bind:key="index">
        <div class="step-title">
          {{ memo.step_name}}
        </div>
        <div class="content-memo-text">
          <p class="" v-bind:class="{ link: memo.item_text }" @click="showBox(memo)">{{ memo.item_title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Memobox from '@/components/Memobox.vue';

export default {
  name: 'Memo',
  components: {
    Nav,
    Memobox,
  },
  props: ['isMuted'],
  data: function () {
    return {
      memos: require(`../data/graphisme_memo_content.csv`),
      showMemoBox: false,
      memoItem : null,
    }
  },
  methods: {
    showBox(memo) {
      this.memoItem = memo;
      this.showMemoBox = true;
    },
    hideBox(){
      this.showMemoBox = false;
    }
  }
}
</script>

<style scoped>
.content-memo {
  padding: 100px 0px;
  width: 100%;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
  background: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content-memo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
}

.content-memo-text img {
  height: 45px;
  align-self: center;
}

.step-title {
  font-size: 28px;
  text-align: center;
}

p {
  width: 250px;
  word-wrap: break-word;
}

.link {
  line-height: 30px;
  word-wrap: break-word;
  width: 100%;
  box-sizing: border-box;
  padding: 0 32px;
  font-size: 22px;
  color: #D5ffcf;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  position: relative;
}

.link::after {
  content: '';
  background: url('../assets/var_icons/arrow_memo.svg');
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: contain;
  position: relative;
  top: 3px;
  right: -20px;
}

</style>
