<template>
  <div class="home">
    <Nav />
    <div class="home-content">
      <img class="logo" src="@/assets/var_icons/carre.svg" alt="">
      <button>Nouvelle partie</button>
      <button>Reprendre partie</button>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>

<style scoped>
.lien a {
  color: #198daa;
  text-decoration: none;
  box-shadow: inset 0 -0.45em #ffff;
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
		transform: translate(0px, 0px);
	}
	50% {
		transform: translate(-20px, 20px);
	}
	100% {
		transform: translate(0px, 0px);
	}
}

.logo {
  width: 60%;
  position: relative;
  top: -20%;
  animation: float 6s steps(12, end) infinite;
}

@media only screen and (max-width: 2000px) and (min-width: 376px)  {
  .logo {
    width: 30%;
  }
}

button {
  outline: none;
  border: none;
  padding: 10px;
  width: 145px;
  height: 80px;
  font-size: 20px;
  background: #FFFFFF;
  box-shadow: 3px 3px 0 0 rgba(0,0,0,0.50);
  display: inline-block;
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