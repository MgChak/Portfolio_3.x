<template>
  
  <mouse_tracker/>


  <the_header/>

  <div class="footer_conatiner_fixed"></div>

  <div class="main_view_window" :style="[cursor_status] " >

    <router-view></router-view>

  </div>
  



</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue'
import the_header from './components/header.vue'


//依赖引入
import {onMounted,watchEffect,computed} from 'vue'
import {useRoute} from 'vue-router'
import useStore from './store/index.js'
import { useWindowSize} from '@vueuse/core'
const store = useStore()
const route = useRoute()
const w_size = useWindowSize()
    

//逻辑
  onMounted(()=>{


  
    //监听鼠标移动，把鼠标坐标存入库
    window.addEventListener('pointermove', (e)=>{
      if(e.pointerType == 'mouse'){
        store.mouse_position.x = e.clientX
        store.mouse_position.y = e.clientY
      }
    })

    window.addEventListener('scroll',(e)=>{
      store.scroll_position = window.scrollY
      store.scroll_page_height = document.getElementById('article_container_for_scroll').scrollHeight
    })

  })

  


  //保存窗口尺寸
  store.page_width = w_size.width
  store.page_height = w_size.height

  //监听路由变化并存入数据库
  watchEffect(()=>{store.path_now = route.name})

  
  //检测鼠标状态
  let cursor_status = computed(()=>{
    if(store.tracker_status == 'hidden'){
      return {cursor:'default'}
    }else{
      return {cursor:'none'}
    }
  })

  let page_height = computed(()=>{
    return {height : store.page_height+'px'}
  })


</script>

<style scoped>


.footer_conatiner_fixed{
  width:100vw;
  height:100vh;
  position:fixed;
  left:0;
  right:0;
  z-index: 5;
  pointer-events: none;
}

#article_container_for_scroll{
  overflow: hidden;
}

</style>
