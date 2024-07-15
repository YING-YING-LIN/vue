<!-- 在建立新檔案一定要寫到script、template -->

<script>
 export default{
    data(){
        return{
            // 設置變數
            peopleHeight:0,
            peopleWeight:0,
            result:-1,
        }
    }, 
methods:{
    calculateBmi(){
        //計算公式
        this.result = (this.peopleWeight/((this.peopleHeight/100)*(this.peopleHeight/100)).toFixed(2));
        console.log('我是計算');
    },
    clearBmi(){
        this.peopleHeight=0;
        this.peopleWeight=0;
        this.result=-1,
        console.log('我是清除');
    },
    showBmi(){
        // document.querySelector('#thin').style.backgroundColor = '';
        // document.querySelector('#normal').style.backgroundColor = '';
        // document.querySelector('#heavy').style.backgroundColor = '';
        // document.querySelector('#fat').style.backgroundColor = '';

    },
    
}
 }
</script>

<template>

<form class="form-style">
        <h2>BMI測驗</h2>
        <div class="input-container">
        <label for="my_height">
            <span>身高:</span>
            <input type="number" class="my_height" id="my_height" placeholder="請輸入身高" v-model="peopleHeight"><span>cm</span>
        </label>
        <label for="my_weight">
            <span>體重:</span>
            <input type="number" class="my_weight" id="my_weight" placeholder="請輸入體重" v-model="peopleWeight"><span>kg</span>
        </label>

        <button @click="calculateBmi" id="my_btn" class="my_btn" type="button">開始計算</button>
        <button @click="clearBmi" id="my_btn" class="my_btn" type="button">清除計算</button>
        </div>
        <div class="my-span">
            <span>您的BMI值:</span><span class="show_01">{{ result.toFixed(2) }}</span>
        </div>


        <table class="my-table">
        <tr>

            <th>顯示範圍</th>
            <th>身體質量指數(BMI)
                (kg/m2)</th>

        </tr>
        <!-- v-bind可以綁變數也可以放字串 -->
        <tr id="thin"  v-if="0 <= result && result < 18.5"> <!-- :class="0 <= result && result < 18.5 ? 'yellow='' " -->

            <td class="yellow">BMI ＜ 18.5 </td>
            <td class="yellow">「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！</td>

        </tr>
        <tr id="thin"  v-else>

            <td>BMI ＜ 18.5 </td>
            <td>「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！</td>

        </tr>
        
        <tr id="normal" v-if="18.5 <= result && result < 24" >

            <td class="yellowgreen">18.5≦BMI＜24</td>
            <td class="yellowgreen">恭喜！「健康體重」，要繼續保持！</td>

        </tr>

        <tr id="normal" v-else>

           <td >18.5≦BMI＜24</td>
           <td>恭喜！「健康體重」，要繼續保持！</td>

        </tr>

        <tr id="heavy" v-if="24 < result && result < 27">

            <td class="orange">24≦BMI＜27</td>
            <td class="orange">「體重過重」了，要小心囉，趕快力行「健康體重管理」！</td>

        </tr>

        <tr id="heavy" v-else>

            <td >24≦BMI＜27</td>
            <td >「體重過重」了，要小心囉，趕快力行「健康體重管理」！</td>

        </tr>

        <tr id="fat" v-if="27 <= result">

            <td class="red">27≦BMI</td>
            <td class="red">啊～「肥胖」，需要立刻力行「健康體重管理」囉！</td>

        </tr>

        <tr id="fat" v-else>

            <td >27≦BMI</td>
            <td >啊～「肥胖」，需要立刻力行「健康體重管理」囉！</td>

        </tr>


    </table>
    </form>

    <!-- 三元判斷式 -->
     <!-- condition ? exprIfTrue : exprIfFalse -->
      <!-- condition -> 判斷條件-->
       <!-- exprIfTrue -> 如果是的話執行這個 -->
        <!-- exprIfFalse -> 不是的話執行這個 -->
     

    

</template>

<style>
.form-style {
            width: 400px;
            margin: auto;
            margin-top: 50px;

        }

.input-container {
        display: flex;
        flex-direction: column;
  }

label {
    margin-bottom: 10px;
  }

        .my_btn {
            width: 250px;
            margin-top: 10px;
        }

        .my-span {
            margin-top: 10px;
        }

        .my-table {
            margin: auto;
            margin-top: 10px;
        }

        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        .yellow{background-color: yellow;}

        .yellowgreen{background-color: yellowgreen;}

        .orange{background-color: orange;}

        .red{background-color: red;}
</style>