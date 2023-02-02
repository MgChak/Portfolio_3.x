<template>
  
  <mouse_tracker/>


  <the_header/>

  <scroll_bar/>


  <div class="main_view_window">

    <router-view></router-view>

  </div>
  



</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue'
import the_header from './components/header.vue'
import scroll_bar from './components/scroll_bar.vue'
//hook引入
import {use_handle_scroll} from './hooks/use_handle_page_scroll'
//依赖引入
import {onMounted,watchEffect} from 'vue'
import {useRoute} from 'vue-router'
import useStore from './store/index.js'
const store = useStore()
const route = useRoute()
    

//逻辑
  onMounted(()=>{
      //开启页面后直接保存页面宽度到库
      store.page_width = document.body.clientWidth
      store.page_height = window.innerHeight

    
    //监听鼠标移动，把鼠标坐标存入库
    window.addEventListener('mousemove', (e)=>{
        store.mouse_position.x = e.clientX
        store.mouse_position.y = e.clientY
    })

    //监听鼠标滚轮滚动
    window.addEventListener('wheel',(e)=>{
      use_handle_scroll(e)
    })

    //开启页面后直接保存页面宽度到库
    window.addEventListener('resize',()=>{
      store.page_width = document.body.clientWidth
      store.page_height = window.innerHeight
    })

  })

  //监听路由变化并存入数据库
  watchEffect(()=>{store.path_now = route.name})

  



</script>

<style scoped>
.main_view_window{
  width:100%;
  height:100vh;

  position:fixed;
  z-index: 0;

  overflow-x: hidden;
  overflow-y: hidden;

}




</style>
