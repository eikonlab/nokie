<template>
  <div>
    <h2>{{ subject }}</h2>
    <div>
      <div class="carte" v-for="card in cards" :key="card.id">
        Carte: {{ card.id }}<br />
        {{ card.text }}
        <img :src="`${card.image}`"  alt="">

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'CardDeck',
  data: function () {
    return {
      cards: require(`../data/${this.subject}.json`),
      cards_csv: require(`../data/${this.subject}.csv`),
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
.carte {
  margin-bottom: 30px;
  border: 1px solid black;
}

.left {
  text-align: left;
}

</style>
