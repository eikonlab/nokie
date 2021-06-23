<template>
  <div class="game">
    <Nav v-on:toggleSound="$emit('toggleSound')" v-bind:isMuted="isMuted"/>
    <div class="content-about">
      <img class="logoAbout" src="@/assets/var_icons/carre.svg" alt="">
      <p>C'est carré est un jeu destiné aux étudiants d'eikon afin d'aborder la méthodologie de façon ludique.</p>
      <h2>Créé par</h2>
      <ul>
        <div class="person">
          <li>illustration + design interface</li>
          <li><a target="_blank" href="https://www.instagram.com/emilie_bersier_/">Emilie Bersier</a></li>
        </div>
        <div class="person">
          <li>logo + design interface</li>
          <li><a target="_blank" href="https://www.instagram.com/jonathanmabboux/">Jonathan Mabboux</a></li>
        </div>
        <div class="person">
          <li>code + narration</li>
          <li><a target="_blank" href="https://www.lefutoir.ch">Ali Ulukütük</a></li>
        </div>
      </ul>
      <h2>Encadrants</h2>
      <ul>
        <div class="person">
          <li>Caroline Buttet</li>
          <li>Julien Minguely</li>
          <li>Martial Mingam</li>
        </div>
      </ul>
      <h2>Musique</h2>
      <ul>
        <div class="person">
          <li>Daft Punk- Veridis Quo (8bit) by HunTerSpoTMusic</li>
          <br>
          <li>Blonde Redhead - For the Damaged Coda</li>
        </div>
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
@keyframes rainbow {
  0% {
    color: #FFDB70;
  }
  50% {
    color: #1CD0FF;
  }
  100% {
    color: #FFDB70;
  }
}

@keyframes float {
	0% {
		transform: translateX(0px);
	}
	50% {
		transform: translateY(-20px);
	}
	100% {
		transform: translateX(0px);
	}
}

.logoAbout {
  width: 200px;
  margin: 30px;
  animation: float 4s steps(12, end) infinite;
}

p {
  margin: 30px 0px;
  width: 320px;
  line-height: 30px;
}

h2 {
  font-size: 30px;
  margin: 5px 0px;
  animation: rainbow 6s ease-in-out infinite;
}

.person {
  margin: 40px;
}

ul {
  margin: 0px;
  padding: 0px;
}

li {
  padding: 0px;
  list-style-type: none;
  margin: 5px;
  width: 280px;
}

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

@keyframes rainbowUnderline {
  0% {
    box-shadow: inset 0 -0.1em #FFDB70
  }
  50% {
    box-shadow: inset 0 -0.1em #1CD0FF
  }
  100% {
    box-shadow: inset 0 -0.1em #FFDB70
  }
}

a {
  color: #ffff;
  text-decoration: none;
  animation: rainbowUnderline 6s ease-in-out infinite;
}
</style>
