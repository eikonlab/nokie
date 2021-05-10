<template>
  <div>
    <h2>{{ subject }}</h2>
    <div>
      <div class="carte" v-for="item in cards" :key="item.id">
        Carte: {{ item.id }}<br />
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardDeck',
  data: function () {
    return {
      cards: require(`../data/${this.subject}.json`)
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
}

</style>
