<template>
  <div class="game">
    <Nav />
    <div class="content-about">
      <h2>C'est carré</h2>
      <p>Une petite phrase qui explique le but du projet.</p>
      <p>Créé par</p>
      <ul>
        <li>Vos</li>
        <li>Noms</li>
        <li>Ici</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'About',
  components: {
    Nav,
  },
  data: function () {
    return {
    }
  },
}
</script>

<style scoped>
.content-about {
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
  color: #ffff;
  text-decoration: none;
  box-shadow: inset 0 -0.25em #198daa;
  transition: all 0.4s;
}

a:hover {
  box-shadow: inset 0 -0.75em #198daa;
}
</style>
