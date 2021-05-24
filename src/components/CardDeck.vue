<template>
  <div class="card-container">
    <h2>{{ subject }}</h2>
    <div>
      <div class="card" v-for="card in cards" :key="card.id">
        Carte: {{ card.id }}<br />
        {{ card.text }}
        <img :src="require(`@/assets/images/${card.image}`)" alt=""/>
        <div>
          <button>A toi de jouer!</button>
          <button>A toi de jouer!</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CardDeck',
  data: function () {
    return {
      // cards: require(`../data/${this.subject}.json`),
      cards: require(`../data/${this.subject}.csv`),
    }
  },
  props: {
    subject: String
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
</style>
