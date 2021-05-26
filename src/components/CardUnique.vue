<template>
  <div class="card-container">
    <div class="card" id="card1">
      <p>
        Carte: {{ card.id }}<br />
        {{ card.text }}<br>
      </p>
        <img :src="require(`@/assets/images/${card.image}`)" alt=""/>
        <div class="button-container">
            <button v-on:click="register_01_click()">{{ card.option_01_text }}</button>
            <button v-on:click="register_02_click()">{{ card.option_02_text }}</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUnique',
  props: {card:Object},
  methods: {
    register_01_click (){
        const nextCard_01 = this.card.option_01_next_text;

        this.$emit('displayCard', nextCard_01)
    },
    register_02_click (){
        const nextCard_02 = this.card.option_02_next_text;

        this.$emit('displayCard', nextCard_02)
    }
        
    }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-container {
  height: 100%;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

p {
  width: 315px;
  max-height: 115px;
  font-size: 22px;
  font-weight: 200;
  margin: 20px 30px;
  text-align: center;
  color: #4D4D4D;
}

img {
  border: none;
  width: 315px;
  height: 315px;
  image-rendering: pixelated;
  margin: 0px 30px;

}

.button-container {
  display: flex;
  justify-content: space-between;
  margin: 30px;
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