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
}

.content-memo-text img {
  height: 45px;
  align-self: center;
}

.step-title {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #333333;
  width: 150px;
  height: 60px;
  margin-top: 20px;
  font-size: 20px;
  background: #FFFFFF;
}

a {
  font-size: 22px;
  color: #B6FFAB;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
}

a::after {
  content: icon;
}

</style>
