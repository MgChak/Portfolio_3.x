<template>
<mouse_tracker/>

<router-view></router-view>

<p>Whenever I start a new project. I always start with discovery research. I will interview target audience and review articles to deepen my understanding of the current situation of the whole industry or a particular kind of app to help me better identify the parts of the industry or apps that need to be improved. After identifying the problem, I start thinking about how my design can bring a better user experience to the users. Then I start designing and test my design with target users. This step will be  the longest in my entire design process. I will constantly revise my design based on user feedback until I get satisfactory results.
</p>

</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue';
//依赖引入
import {computed,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import useStore from './store/index.js'
const router = useRouter()
const store = useStore()
//逻辑


  onMounted(()=>{
    //监听鼠标移动，把鼠标坐标存入库
    window.addEventListener('mousemove', (e)=>{
        store.mouse_position.x = e.clientX
        store.mouse_position.y = e.clientY
    })
    //监听鼠标滚轮滚动
    window.addEventListener('wheel',(e)=>{
      console.log(e.wheelDelta)
    })

  })



  let handleclickE = (id)=>{
    console.log(id)
    router.push({
      name:id
    })
  }

  let handleIncrease = ()=>{
    store.testDate = store.testDate + 2
  }

  let theNum = computed(()=>store.testDate)


</script>

<style scoped>
h3{
  cursor: pointer;
}

p{
  font-family: 'Kanit', sans-serif;
  font-size:15px;
  
}

</style>
