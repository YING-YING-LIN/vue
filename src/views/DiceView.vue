<script>
export default{
    data(){
        return{
            result:'',
            dice01:0,
            dice02:0,
            dice03:0,
        }
    },
    methods: {
    rolldice() {
      this.result = '';
      for (let n = 1; n < 21; n++) {
        this.dice01 = Math.floor(Math.random() * 6) + 1;
        this.dice02 = Math.floor(Math.random() * 6) + 1;
        this.dice03 = Math.floor(Math.random() * 6) + 1;

        this.result += `第 ${n} 次: ${this.dice01}, ${this.dice02}, ${this.dice03}`;

        if (this.dice01 === this.dice02 && this.dice02 === this.dice03) {
          this.result += '三顆骰子數字相同，停止擲骰子。';
          break;
        }
      }
    }
  }
};

</script>

<template>

<div class="container flex flex-col	items-center">
  <img class="w-[100px] h-[100px] mt-5" src="@/assets/004.jpg" alt="">
<button @click="rolldice" class=" w-[150px] rounded-[40px] text-base font-bold h-10 border-0 mt-5 bg-green-500 text-black hover:bg-green-700 active:bg-green-500 " id="my_btn" type="button">開始擲骰子</button>
<div class="w-[110px] mt-5" id="show_box">{{ result }}</div>
</div>
</template>

<style>
</style>