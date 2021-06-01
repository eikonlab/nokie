<template>
  <div class="card-container" :style="{'background-color':card.bckn_color}">
    <div class="card">
      <p class="legend">
        Carte: {{ card.id }}<br />
        {{ card.text }}<br>
      </p>
        <img :src="require(`@/assets/images/${card.image}`)" alt=""/>
        <p class="legend">{{ card.card_name }}</p>
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
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E4F5FF;
}

.card {
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (max-width: 1200px) and (min-width: 376px)  {
  .card {
    height: 80%;
  }
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
  margin: 45px 0px 20px 0px;
}

.legend {
  
}

img {
  border: none;
  width: 315px;
  height: 315px;
  image-rendering: pixelated;
}

.button-container {
  margin-top: 30px;
  width: 315px;
  display: flex;
  justify-content: space-between;
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
  transition: all 0.2s;
}

@media (hover: hover) and (pointer: fine) {
  button:hover, button:active {
  background: #FFFFFF;
  box-shadow: none;
  transform: scale(1.05);
  transform: translate(1px,1px);
  }
}

</style>