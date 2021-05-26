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

img {
  border: none;
  width: 315px;
  height: 315px;
  image-rendering: pixelated;
}

.button-container {
  width: 100%;
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
  box-shadow: 3px 3px 0 0 rgba(0,0,0,0.50);
  display: inline-block;
  word-wrap: break-word;
}
</style>