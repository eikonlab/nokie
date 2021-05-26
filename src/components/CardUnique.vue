<template>
  <div class="card-container">
    <div class="card" id="card1">
      <p>
        Carte: {{ card.id }}<br />
        {{ card.text }}<br>
        step: {{ card.step }}
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
h2 {
  color: darkblue;
}
  
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.card-container{
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:center;
  height: 100%;
  width: 100%;
}

.card {
  display:flex;
  flex-direction:column;
  margin: 30px;
}

img{
  border: none;
  min-width: 12px;
  min-height:12px;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}

.button-container{
  display: flex;
  justify-content: space-between;
}

button{
  outline: none;
  border: none;
  padding: 10px;
  font-size: 1.3rem;
  width: calc(50% - 15px);
  background: white;
}
</style>
