<script>
import sun from '@/assets/sun.jpg';
import sunclound from '@/assets/sunclound.jpg';
import clound from '@/assets/clound.jpg';
import rain from '@/assets/rain.jpg';

export default{
    data(){
        return{
            cities:[], // 存儲所有城市的天氣數據
            filtercities:[], // 存儲過濾後的城市的天氣數據
            allcity:[
            "臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣", "基隆市", "新竹市", "嘉義市",
        ],
            northcity:[
            "臺北市", "新北市", "宜蘭縣", "基隆市", "桃園市", "新竹縣", "新竹市",
        ],
            midcity: [
            "苗栗縣", "臺中市", "彰化縣", "南投縣", "雲林縣",
        ],
        southcity:[
            "嘉義縣", "嘉義市", "臺南市", "高雄市", "屏東縣",
        ],
        eastcity:[
            "花蓮縣", "臺東縣",
        ],
        outcity:[
            "澎湖縣", "金門縣", "連江縣",
        ],
        }


    },mounted() {
        this.fetchDataAndUpdate();
    }
    ,methods: {
        fetchDataAndUpdate(){
            const cachedData = localStorage.getItem('weatherData');
            if(cachedData){
                this.cities = JSON.parse(cachedData);  // 將緩存的 JSON 字符串解析為 JavaScript 對象並賦值給 this.cities
                this.filteredcities = this.cities;  // 將 this.cities 賦值給 this.filteredCities 以便顯示所有城市的天氣數據
            }else{
                this.fetchWeatherData();  // 如果沒有緩存的數據，調用 fetchWeatherData 方法從 API 獲取數據
            }
        },

        fetchWeatherData(){
            fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-D6F10CAC-826D-473C-A989-9E95E4422232')
            .then(response => response.json())
            .then(data => {
                this.cities = data.records.location;
                this.filtercities = this.cities;
                localStorage.setItem('weatherData' , JSON.stringify(this.cities));
            })
        },

        filterWeather(area){
            if(area === '全部'){this.filtercities = this.cities.filter(city => this.allcity.includes(city.locationName));
            }else if(area === '北部'){this.filtercities = this.cities.filter(city => this.northcity.includes(city.locationName));
            }else if(area === '中部'){this.filtercities = this.cities.filter(city => this.midcity.includes(city.locationName));
            }else if(area === '南部'){this.filtercities = this.cities.filter(city => this.southcity.includes(city.locationName));
            }else if(area === '東部'){this.filtercities = this.cities.filter(city => this.eastcity.includes(city.locationName));
            }else if(area === '外島'){this.filtercities = this.cities.filter(city => this.outcity.includes(city.locationName));
            }
        },

        getMinTemp(city){
            return city.weatherElement.find(el => el.elementName === "MinT").time[0].parameter.parameterName;
        },

        getMaxTemp(city){
            return city.weatherElement.find(el => el.elementName === "MaxT").time[0].parameter.parameterName;
        },

        getRainfall(city){
            return city.weatherElement.find(el => el.elementName === "PoP").time[0].parameter.parameterName;
        },

        getWeatherImg(city){
            const pop = this.getRainfall(city);
            if (pop < 20) {
                return sun;
            } else if (pop < 30) {
                return sunclound;
            } else if (pop < 40) {
                return clound;
            } else {
                return rain;
            }
        },

        getWeatherDescription(city){
            const pop = this.getRainfall(city);
            if (pop < 20) {
                        return "天氣晴朗陽光燦爛~";
                    } else if (pop < 30) {
                        return "天氣晴朗，是出門的好機會";
                    } else if (pop < 40) {
                        return "雲霧較厚，降雨機率增加";
                    } else if(pop < 50) {
                        return "降雨機會增加，要記得帶傘喔";
                    }
        },





    
}
}

</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid bg-gray-400 ">
            <span class="navbar-brand mb-0 h1 ">台灣各縣市天氣預報<i class="fa-solid fa-cloud"></i></span>
            <div class="container-fluid btn_navbar">
                <button @click="filterWeather('全部')" type="button" data-area="全部" class="showcity  bg-amber-300 rounded-full">全部縣市</button>
                <button @click="filterWeather('北部')" type="button" data-area="北部" class="showcity  ms-3 bg-amber-300 rounded-full">北部縣市</button>
                <button @click="filterWeather('中部')" type="button" data-area="中部" class="showcity  ms-3 bg-amber-300 rounded-full">中部縣市</button>
                <button @click="filterWeather('南部')" type="button" data-area="南部" class="showcity  ms-3 bg-amber-300 rounded-full">南部縣市</button>
                <button @click="filterWeather('東部')" type="button" data-area="東部" class="showcity  ms-3 bg-amber-300 rounded-full">東部縣市</button>
                <button @click="filterWeather('外島')" type="button" data-area="外島" class="showcity  ms-3 bg-amber-300 rounded-full">外島地區</button>
            </div>
        </div>
    </nav>
    <div class=" mt-3 ms-4">
        <div class="row ms-5 m-0" id="weatherlist">
            <div class="col-md-3" v-for="city in filtercities" :key="city.locationName">
                <div class="card mt-3" style="width: 18rem;">
                    <div class="card-body border ">
                        <h5 class="card-title">{{ city.locationName }}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary "></h6>
                        <img class="weatherimg ms-5" :src="getWeatherImg(city)" alt="">
                        <p class="card-text text-center mt-3" >{{getWeatherDescription(city)}}</p>
                        <p class="temperature text-center"><i class="fa-solid fa-temperature-low me-2"></i>最高氣溫:{{getMaxTemp(city)}}</p>
                        <p class="temperature text-center"><i class="fa-solid fa-temperature-low me-2"></i>最低氣溫:{{getMinTemp(city)}}</p>
                        <p class="rainfall text-center"><i class="fa-solid fa-cloud-rain"><span class="">{{getRainfall(city)}}%</span></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>

<style>
body {
    /* background-image: url('@/assets/background.jpg'); */
    background-size: cover;
    background-repeat: no-repeat;
}

.btn_navbar {
    display: flex;
    justify-content: center;
    align-items: center;

}

.border{
    border: 2px solid #000;
    padding: 5px;
    margin: 5px 0;
}

.weatherimg{
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
}

#weatherlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.col-md-3 {
    flex: 0 0 23%;
    max-width: 23%;
    margin: 10px;
}

.card {
    width: 100%;
}
</style>