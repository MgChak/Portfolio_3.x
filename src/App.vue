<template>
  
  <mouse_tracker/>


  <the_header/>

  <loader/>

  <div class="footer_conatiner_fixed" :style="[cursor_status]" :class="blur_change"></div>

  <div class="main_view_window" :style="[cursor_status]">
    
    
    <router-view></router-view>

    

    <div class="router_full_cover_2" :class="store.full_cover_class_2" ></div>

  </div>

  

  <div class="router_full_cover" :class="store.full_cover_class"></div>


</template>

<script setup>
//组件引入
import mouse_tracker from './components/mouseTracker.vue'
import the_header from './components/header.vue'
import loader from './components/comps/page_loader.vue'



//依赖引入
import {onMounted,watchEffect,computed,watch,ref} from 'vue'
import {useRoute} from 'vue-router'
import useStore from './store/index.js'
import { useWindowSize} from '@vueuse/core'
import {page_scroll_locker_main, s_lock} from './hooks/use_page_scroll_locker'
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

  
  page_scroll_locker_main()

  //监听调用滚动锁
  watch(()=>store.page_scroll_locker_status,()=>{
    page_scroll_locker_main()
  })


  let blur_change = computed(()=>{
    if (store.footer_card_is_show){
      return 'footer_blur'
    }else{
      return ''
    }
  })

</script>

<style scoped>

.footer_conatiner_fixed{
  width:100%;
  height:100vh;
  position:fixed;
  left:0;
  right:0;
  z-index: 10;
  pointer-events: none;
}


/* 屏幕遮罩 */
.router_full_cover{
  width:100vw;
  height:100vh;
  position: fixed;
  top:0;
  left:0;
  background-color: #1C1E20;
  z-index:9;
  pointer-events: none;
  
}
.router_full_cover_2{
  width:100vw;
  height:100vh;
  position: fixed;
  top:0;
  left:0;
  background-color: #1C1E20;
  z-index:5;
  pointer-events: none;
  backdrop-filter: blur(30px);
}

.bottom{
  transform: translateY(105%);
}
.center{
  transform: translateY(0);
  transition: all 0.3s;
}
.top{
  transform: translateY(-105%);
  transition: all 0.6s;
}

.show{
  opacity: 0;
  /* transform: translateY(105%); */
  transition: all 0.15s ease-out;
}
.cover{
  opacity: 1;
  /* transform: translateY(0); */
  transition: all 0.2s ease-in;
}
.footer_blur{
  background-color: rgba(0, 0, 0, 0.188);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

</style>
