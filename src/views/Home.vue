<template>
  <div class="home">
    <Nav />
    <div class="home-content">
      <img class="logo" src="@/assets/var_icons/carre.svg" alt="">
      <!-- <span><a href="#">Test lien</a></span> -->
      <button>Start</button>
      <button>Reprendre</button>
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
/* span a {
  color: #198daa;
  text-decoration: none;

} */


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
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
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