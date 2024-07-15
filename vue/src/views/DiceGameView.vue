<script>
//先改成option寫法
export default{
    data(){
        return{
            arrayNum:[],

        }

    },
    methods:{
        play_btn(){
            for (let n = 0; n < 20; n = n + 1){
                let result01 = this.randomNum();
                let result02 = this.randomNum();
                let result03 = this.randomNum();

                let final_result = result01 + ',' + result02 + ',' + result03
                this.arrayNum.push(final_result);

                if(result01 == result02 && result02 == result03){
                    this.arrayNum.push('三個色子數字相同stop');
                    break;
                }
            }
        },
        randomNum(){
        return Math.floor(Math.random()*6 + 1);
    }
    }
    
}


</script>

<template>
    <main class="flex flex-col justify-center items-center	m-0	bg-black text-emerald-500">
    <h1>擲骰子遊戲</h1>
    <img class="w-[100px] h-[100px]" src="@/assets/004.jpg" alt="">
    <div class="button">
        <button @click="play_btn" class="w-[150px] h-[40px] mt-5 bg-green-500 text-black font-bold text-base rounded-[40px] text-sm hover:bg-green-700 active:bg-green-500" type="button">點擊擲骰子</button>
    </div>
    <!-- 用陣列的方式來顯示資料 -->
    <div class="mt-5 text-center show_box" v-for="item in arrayNum" :key="item">
        {{ item }}
    </div>
    </main>
</template>

<style>
</style>