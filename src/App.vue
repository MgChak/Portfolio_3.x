<template>
  
  <mouse_tracker/>


  <the_header/>

  <scroll_bar/>


  <div class="main_view_window" :style="[cursor_status,page_height]" 
    @touchstart="use_handle_scroll_touch($event)"
    @touchmove="use_handle_scroll_touch($event)"
    @touchend="use_handle_scroll_touch($event)">

    <router-view></router-view>

  </div>
  



</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue'
import the_header from './components/header.vue'
import scroll_bar from './components/scroll_bar.vue'
//hook引入
import {use_handle_scroll,use_handle_scroll_touch} from './hooks/use_handle_page_scroll'
//依赖引入
import {onMounted,watchEffect,computed,onBeforeUnmount} from 'vue'
import {useRoute} from 'vue-router'
import useStore from './store/index.js'
import { useWindowSize } from '@vueuse/core'
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

    //监听鼠标滚轮滚动
    window.addEventListener('wheel',(e)=>{
      //初始化滚动动画
      store.scroll_animation = 'transition:all 0.6s var(--animation-slow-cubic)'
      use_handle_scroll(e)
    })

    window.addEventListener('wheel',(e)=>{
      //初始化滚动动画
      store.scroll_animation = 'transition:all 0.6s var(--animation-slow-cubic)'
      use_handle_scroll(e)
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
.main_view_window{
  width:100%;

  position:fixed;
  z-index: 0;
  top:0;

  overflow-x: hidden;
  overflow-y: hidden;

  

}




</style>
