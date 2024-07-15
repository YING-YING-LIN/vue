<script>
//圖片載入到頁面時使用
import scissors from '@/assets/005.png'
import rock from '@/assets/006.png'
import paper from '@/assets/007.png'

export default{
    //資料
    data(){
        return{
            scissors:scissors,
            rock:rock,
            paper:paper,
            score:{
                win:0,
                losses:0,
                ties:0,
            },
            youResult:'',
            computerResult:'',
            result:'',
        }
    },
    //預處理
    mount(){
      //天氣卡 fetch
        // this.score.win = 1;
        // this.updateScore();
    },
    //其中一種方法  (主要用在陣列)
    //1.方法
    computed:{
      //一定要回傳一個任意值
      computerChoice(){
        return this.choices[Math.floor(Math.random()*3)]
      },
    },
    //2.方法
    methods:{
      //只會執行不一定要回傳值
        pickComputerMove(){
          // let computerChoice = this.computerChoice
          // //使用computed的方法
          // console.log(this.computerChoice);
          // //使用methods 的方法
          // console.log(this.computerChoice());
          
          const randomNumber = Math.random();
          let computerMove = "";
          if (randomNumber >= 0 && randomNumber < 1 / 3) {
              computerMove = "rock";
          } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
             computerMove = "paper";
          } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
             computerMove = "scissors";
          }
           return computerMove;
        },

        playGame(playerMove){
          const computerMove = this.pickComputerMove();
      if (computerMove === "rock") {
        this.computerResult = this.rock;
      } else if (computerMove === "paper") {
        this.computerResult = this.paper;
      } else if (computerMove === "scissors") {
        this.computerResult = this.scissors;
      }

      if (playerMove === "scissors") {
        this.youResult = this.scissors;
        if (computerMove === "rock") {
          this.result = "You lose.";
        } else if (computerMove === "paper") {
          this.result = "You win.";
        } else if (computerMove === "scissors") {
          this.result = "Ties.";
        }
      } else if (playerMove === "paper") {
        this.youResult = this.paper;
        if (computerMove === "rock") {
          this.result = "You win.";
        } else if (computerMove === "paper") {
          this.result = "Ties.";
        } else if (computerMove === "scissors") {
          this.result = "You lose.";
        }
      } else if (playerMove === "rock") {
        this.youResult = this.rock;
        if (computerMove === "rock") {
          this.result = "Ties.";
        } else if (computerMove === "paper") {
          this.result = "You lose.";
        } else if (computerMove === "scissors") {
          this.result = "You win.";
        }
      }

      if (this.result === "You win.") {
        this.score.wins += 1;
      } else if (this.result === "You lose.") {
        this.score.losses += 1;
      } else if (this.result === "Ties.") {
        this.score.ties += 1;
      }
      // this.updateScore();
        },
      //    updateScore(){
      //  document.querySelector(".js-score").innerHTML = `Wins: ${this.score.wins}, Losses: ${this.score.losses}, Ties: ${this.score.ties}`;
      //    },

    }
}

</script>

<template>
    <div class="container">=
    <section class="flex flex-col items-center ">
    <h1>請選擇</h1>
    <div class="flex">
      <!-- 圖片撰寫的方式 -->
      <button @click="playGame('scissors')">
      <img :src="scissors" class="move-icon w-[100px] h-[100px] object-cover opacity-50 " alt="" >
      </button>
      <button @click="playGame('rock')">
      <img :src="rock" class="move-icon w-[100px] h-[100px] object-cover opacity-50" alt="">
    </button>
    <button @click="playGame('paper')">
      <img :src="paper" class="move-icon w-[100px] h-[100px] object-cover opacity-50" alt="">
    </button>
      <!-- <img id="btn01" class="show" src="@/assets/005.png" alt=""> -->
      <!-- <img id="btn02" class="show" src="@/assets/006.png" alt=""> -->
      <!-- <img id="btn03" class="show" src="@/assets/007.png" alt=""> -->
    </div>
  </section>
  <section class="flex flex-col items-center">
    <h1>電腦</h1>
    <div class="flex">
      <div class="col-12 d-flex flex-column align-items-center justify-content-center">
          <p class="js-result result">{{ result }}</p>
          <p class="js-move">
            You
            <img :src="youResult" class="move-icon w-[100px] h-[100px] object-cover opacity-50">
            Computer
            <img :src="computerResult" class="move-icon w-[100px] h-[100px] object-cover opacity-50">
          </p>
          <p class="js-score score">
            Wins: {{this.score.wins}}, Losses: {{this.score.losses}}, Ties: {{this.score.ties}}
          </p>
        </div>
    </div>
  </section>
 
</div>
</template>

<style>
</style>