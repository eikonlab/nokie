<template>
  <div class="card-container">
    <div class="card">
      <p>
        Carte: {{ card.id }}<br />
        {{ card.text }}<br>
      </p>
        <img :src="require(`@/assets/images/${card.image}`)" alt=""/>
        <div class="button-container">
            <button v-on:click="registerClick(card.option_01_nextId)">{{ card.option_01_text }}</button>
            <button v-on:click="registerClick(card.option_02_nextId)">{{ card.option_02_text }}</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUnique',
  props: {card:Object},
  methods: {
    registerClick (nextId){
      this.$emit('displayCard', nextId)
    },        
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 315px;
  min-height: 115px;
  font-size: 22px;
  font-weight: 200;
  text-align: center;
  color: #4D4D4D;
}

/* possible animation */

/* @keyframes imgSwipe {
  0%   { left: -80%; }
  100% { left: 0%; }
} */

img {
  border: none;
  width: 315px;
  height: 315px;
  image-rendering: pixelated;
  /* position: relative;
  left: 0%;
  animation: imgSwipe 1s; */
}

.button-container {
  width: 90%;
  display: flex;
  justify-content: space-around;
}

button {
  outline: none;
  border: none;
  padding: 10px;
  min-width: 145px;
  min-height: 80px;
  font-size: 20px;
  background: #FFFFFF;
  box-shadow: 5px 5px 0 0 rgba(0,0,0,0.50);
  display: inline-block;
  word-wrap: break-word;
  transition: all 0.2s;
}

button:hover {
  background: #FFFFFF;
  box-shadow: inset 5px 5px 1px rgba(44, 44, 44, 0.5), inset -5px -5px 1px #ffffff;
  transform: scale(1.05);
  transform: translate(1px,1px);
}

</style>