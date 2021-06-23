<template>
  <div class="card-container" :style="{'background-color':card.bckn_color}">
    <audio ref="selectsound" preload="auto" src="@/assets/sound/select.mp3" muted></audio>
    <audio ref="deadsound" preload="auto" src="@/assets/sound/loser.mp3" muted></audio>
    <audio ref="winnersound" preload="auto" src="@/assets/sound/winner.mp3" muted></audio>
    <div class="card">
      <p>
        {{ card.text }}<br>
      </p>
        <img :src="require(`@/assets/images/${card.image}`)" alt=""/>
        <figcaption class="legend">{{ card.card_name }}</figcaption>
        <div class="button-container">
            <button v-on:click="registerClick(card.option_01_nextId)">{{ card.option_01_text }}</button>
            <button v-on:click="registerClick(card.option_02_nextId)">{{ card.option_02_text }}</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardUnique',
  props: {card:Object, isMuted:Boolean},
  updated: function () {
    
    const dialogId = this.card.dialog_id;
    const color = this.card.bckn_color
    if(color == '#BDBDBD') {
      this.playDeadSound();
    }
    if (dialogId) {
      this.$emit('showDialogBox', dialogId)
    }
    // if it's the end, play the end music
    const cardId = this.card.id;
    if(cardId == 45){
      this.playEndSound();
    }
  },
  methods: {
    registerClick (nextId){
      this.playSelect();
      // if the next id is a number
      if(typeof nextId == 'number'){
        this.$emit('displayCard', nextId);
      }else{
        this.$router.push({ path: nextId });
      }
      
    },
    playSelect(){
      let audio = this.$refs.selectsound;
      audio.volume = 0.1;
      audio.play(); 
    },
    playDeadSound(){
      let audio = this.$refs.deadsound;
      audio.volume = 0.1;
      audio.play(); 
    },
    playEndSound(){
      let audio = this.$refs.winnersound;
      this.$emit('playEndSound');
      audio.volume = 0.1;
      audio.play(); 
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card-container {
  height: 100%;
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E4F5FF;
}

@media (orientation: portrait) {
  .card-container {
    width: 100%;
  }
}

.card {
  min-height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (max-width: 2000px) and (min-width: 376px)  {
  .card {
    height: 80%;
  }
}

p {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 315px;
  min-height: 115px;
  font-size: 22px;
  font-weight: 200;
  text-align: center;
  color: #4D4D4D;
  margin: 50px 0px 20px 0px;
}

figcaption {
  margin: 10px 0px;
  min-height: 10px;
  font-size: 18px;
  font-weight: 200;
  text-align: center;
  color: rgba(0,0,0,0.5);
}

img {
  border: none;
  width: 315px;
  height: 315px;
  image-rendering: pixelated;
  object-fit: contain;
}

.button-container {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 315px;
  display: flex;
  justify-content: space-between;
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
  word-wrap: break-word;
  transition: all 0.2s;
}

button:hover {
  cursor: url('/hand.png'), auto;
}

@media (hover: hover) and (pointer: fine) {
  button:hover, button:active {
  background: #FFFFFF;
  box-shadow: none;
  transform: scale(1.05);
  transform: translate(1px,1px);
  }
}

@keyframes myAnimCard {
	0% {transform: translateX(0px);}
	50% {transform: translateY(-10px);}
	100% {transform: translateX(0px);}
}

img {
  animation: myAnimCard 4s steps(12, end) infinite;
}

@media screen and (max-height: 667px) {
  img {
    width: 70%;
  }
  .button-container {
    width: 250px;
  }
  button {
    width: 105px;
    padding: 5px;
    min-height: 60px;
    font-size: 18px;
  }
  p {
    width: 280px;
    min-height: 115px;
    font-size: 18px;
    margin: 60px 0px 10px 0px;
  }
}

@keyframes end {
  0% {
    background: #FFDB70;
  }
  50% {
    background: #1CD0FF;
  }
  100% {
    background: #FFDB70;
  }
}

.end {
  animation: end 2s ease-in-out infinite;
}

</style>