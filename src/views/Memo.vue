<template>
  <div class="game">
    <Nav />
    <div class="content-memo">
      <div v-for="(memo, index) in memos" v-bind:key="index">
        <div class="step-title">
          {{ memo.btn_step }}
        </div>
        <br>
        <div class="content-memo-text">
          <p><a href="">{{ memo.memo_text }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Memo',
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
  line-height: 30px;
  margin-bottom: 30px;
}

p {
  width: 250px;
}

a {
  line-height: 30px;
  word-wrap: break-word;
  width: 25px;
  font-size: 22px;
  color: #D5ffcf;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  position: relative;
}

a::after {
  content: '';
  background: url('../assets/var_icons/arrow_memo.svg');
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  z-index: 10;
  display: inline-block;
  background-size: contain;
  position: relative;
  top: 3px;
  right: -20px;
}

</style>
