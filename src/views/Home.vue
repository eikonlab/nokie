<template>
  <div class="home">
    <Nav v-on:toggleSound="$emit('toggleSound')" v-bind:isMuted="isMuted"/>
    <div class="home-content">
      <img class="logo" src="@/assets/var_icons/carre.svg" alt="">
      <button>
        <router-link :to="{ name: 'Game', params: {activeCard: activeCard }}">Nouvelle Partie</router-link>
      </button>
      <button v-if="activeCardFromStorage">
        <router-link  :to="{ name: 'Game', params: {activeCard: activeCardFromStorage }}">Reprendre le jeu</router-link>
      </button>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';

  export default {
    name: 'Home',
    components: {
      Nav
    },
    props: ['isMuted'],
    data: function(){
      return {
        activeCard :0,
        activeCardFromStorage:null,
      }
    },
    mounted(){
      console.log('mount home!');
      this.getStorage();
    },
    methods: {
      getStorage () {
      let localValue = localStorage.getItem('CardID');
        if (localValue) {
          var state = this;
          state.activeCardFromStorage = localValue;
          console.log("storage", localValue);
        }
    },
    }
  }

</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-content {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 30%;
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

.logo {
  width: 60%;
  position: relative;
  top: -20%;
  animation: float 4s steps(12, end) infinite;
}

@media only screen and (max-width: 2000px) and (min-width: 376px)  {
  .logo {
    width: 30%;
  }
}

button {
  outline: none;
  border: none;
  width: 145px;
  height: 80px;
  font-size: 20px;
  background: #FFFFFF;
  box-shadow: 3px 3px 0 0 rgba(0,0,0,0.50);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
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