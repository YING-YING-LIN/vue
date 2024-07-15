<script>
export default{
    data(){
        return{
            result:'你選哪一個呢？',
            choices:{
                scissors:0,
                rock: 1,
                paper: 2,
            },
            pc:0,
        }
    },methods: {
    // moraplay_01() {
    //     this.result='';

    //     this.pc  = Math.round(Math.random() * 2);
        
    //     if(this.pc == this.choices.scissors){
    //         this.result += `電腦出剪刀，你們平手`
    //     }else if(this.pc == this.choices.rock){
    //         this.result += `電腦出石頭，你輸了`
    //     }else if(this.pc == this.choices.paper){
    //         this.result += `電腦出布，恭喜，你贏了`
    //     }
    // },
    // moraplay_02(){
    //     this.result='';

    //     this.pc  = Math.round(Math.random() * 2);

    //     if(this.pc == this.choices.scissors){
    //         this.result += `電腦出剪刀，恭喜，你贏了`
    //     }else if(this.pc == this.choices.rock){
    //         this.result += `電腦出石頭，你們平手`
    //     }else if(this.pc == this.choices.paper){
    //         this.result += `電腦出布，你輸了`
    //     }
    // },
    // moraplay_03(){
    //     this.result='';

    //     this.pc = Math.round(Math.random()*2);

    //     if(this.pc == this.choices.scissors){
    //         this.result += `電腦出剪刀，你輸了`
    //     }else if(this.pc == this.choices.rock){
    //         this.result += `電腦出石頭，恭喜，你贏了`
    //     }else if(this.pc == this.choices.paper){
    //         this.result += `電腦出布，你們平手`
    //     }
        
    // },
    playGame(playerChoice){
        this.result ='';
        this.pc = this.getComputerChoice();

        if(this.pc == this.choices.scissors){
            if(playerChoice ==='scissors'){
                this.result +=`電腦出剪刀，你們平手`;
            }else if(playerChoice ==='rock'){
                this.result +=`電腦出石頭，你輸了`;
            }else if(playerChoice ==='paper'){
                this.result +=`電腦出布，恭喜你贏了`;
            }
        }else if(this.pc == this.choices.rock){
            if(playerChoice ==='scissors'){
                this.result +=`電腦出剪刀，恭喜你贏了`;
            }else if(playerChoice ==='rock'){
                this.result +=`電腦出石頭，你們平手`;
            }else if(playerChoice ==='paper'){
                this.result +=`電腦出布，你輸了`;
            }
        }else if(this.pc == this.choices.paper){
            if(playerChoice ==='scissors'){
                this.result +=`電腦出剪刀，你輸了`;
            }else if(playerChoice ==='rock'){
                this.result +=`電腦出石頭，恭喜你贏了`;
            }else if(playerChoice ==='paper'){
                this.result +=`電腦出布，你們平手`;
            }
        }

    },
       getComputerChoice(){
        const choicArray =Object.values(this.choices) ;
        return choicArray[Math.floor(Math.random()*choicArray.length)];
      },
    }
}

</script>

<template>
    <div class="flex flex-col items-center mt-5 ">
    <div class="flex justify-center space-x-4 mb-4">
    <button @click="playGame('scissors')" id="scissors" class="border-current border-2" type="button"><img class="w-[100px] h-[100px]" src="@/assets/005.png" alt="">剪刀</button>
    <button @click="playGame('rock')" id="rock" class="border-current border-2" type="button"><img class="w-[100px] h-[100px]" src="@/assets/006.png" alt="">石頭</button>
    <button @click="playGame('paper')" id="paper" class="border-current border-2" type="button"><img class="w-[100px] h-[100px]" src="@/assets/007.png" alt="">布</button>
    </div>
    <div><span id="output" class="mt-[20px]">對決結果:{{ result }}</span></div>
    </div>
</template>

<style>
</style>