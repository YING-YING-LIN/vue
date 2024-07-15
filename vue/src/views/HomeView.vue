<script>
//要寫在export default{}裡面喔
export default{
  data(){
  return{
    name:'Nero' , 
    id:'12345678',
    array:['a','s','d','f','g'],
    num:0,
    inputType:'password',
    changeColor:'blue',
    showdiv:true,
    array02:['0','1','2','3',],
  }
},
//方法
methods: {
  plus(){
    //要操控變數
    console.log('有點到我');
    //只要跨不同的東西前面都要加this
    this.num=this.num+5;
    console.log(this.num);
  },
  showhide(){
    if(this.inputType=='text'){
      this.inputType='password'
    }else{this.inputType='text'}
    console.log('有點到')
  },
  toggleColor() {
      // 切換顏色
      if (this.changeColor == 'blue') {
        this.changeColor = 'red';
      } else {
        this.changeColor = 'blue';
      }
      console.log('有點到')
},

changeC(){
  if (this.changeColor == 'red') {
        this.changeColor = '';
      } else {
        this.changeColor = 'red';
      }

},
}
}

</script>

<!-- <script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
  <main>
    <!-- 使用變數->兩個花括號裡面放變數名稱 -->
    {{ name }}
    {{ id }}
    {{ array }}
    <!-- v-on/@ 等於是監聽事件  以下兩種皆可-->
   <button type="button" v-on:click="num++">{{ num }}</button>
   <button type="button" @click="plus('aaa')">{{ num }}</button>
   
   <!-- v-bind -> 要操控的網頁元素(屬性的值) -->
   <input type="password">
   <!-- 1.id
   2.監聽事件
   3.取得元素的type
   4.寫方法修改  (js寫法)-->
    <!-- 1.使用方式(1) v-bind:屬性名稱 -->
    <input v-bind:type="inputType">
    <button type="button" v-on:click="showhide">顯示/隱藏</button>
    <!-- 1.按鈕綁點擊事件
    2.寫方法修改
    3.更改input的type  (vue寫法)-->
    
    <!-- 小練習 -->
     <!-- 方塊顏色切換 -->
     <div class="box" v-bind:style="{backgroundColor: changeColor}" v-on:click="toggleColor" ></div>

     <!-- 老師作法 -->
      <div class="box" v-bind:class="changeColor" v-on:click="changeC"></div>
      <!-- 寫法上可以換成這樣 v-bind:class => :class  -->

    <!-- 123
    <TheWelcome /> -->

    <!-- JS IF判斷式 -->
     
     <div v-if="num ==2" class="box"></div>  <!-- if -->
     <div v-else-if ="num ==3" class="box"></div>   <!-- elseif -->
     <div v-else class="box blue"></div>       
     <!-- if如果要接elseif 、else 要連起來，中間不能加任何東西 -->

     <!--vue  FOR迴圈 -->
     <!-- items.foreach((item)=>{}) -->
      <div v-for="item in array02">
        <div v-if="item == 0">{{ item }}</div>
      </div>

      <!-- 記住for 跟 if 不能共同使用 -->

      <!-- v-model  -->
       <input :value="name" @input="event => name = event.target.value">
       <!-- 本來js => 按鈕.addEventListener('input', function (item) {
        name=item.value} -->
       <input v-model="name">
<!-- bootstrap -->
       <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<!-- tailwind -->
<h1 class="md:text-[90px] text-3xl font-bold underline">
    Hello world!
  </h1>
       




     
  </main>
</template>

<style scoped>

main{
  width: 100%;
  height: 100vh;
  background-color: aqua;
  font-size: 32px;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.box{
  width: 100px;
  height: 100px;
  background-color: blue;
  
}

.red{
  background-color: red;
}

</style>
