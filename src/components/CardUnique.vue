<template>
  <div class="card-container">
      Carte Unique
    <h2>{{ card.step }}</h2>
    <div class="card" id="card1">
        Carte: {{ card.id }}<br />
        {{ card.text }}
        <img :src="require(`@/assets/images/${card.image}`)" alt=""/>
        <div>
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
  display:flex;
  flex-direction:column;
  align-items:center;
}
.card {
  max-width:300px;
  margin-bottom: 30px;
  border: 1px solid black;
  display:flex;
  flex-direction:column;
}

.left {
  text-align: left;
}
img{
  border: 1px solid red;
  min-width: 12px;
  min-height:12px;
}

@media screen and (max-width: 900px) and (min-width: 600px) {
  h2 {
      display: none;
  }
}

</style>
